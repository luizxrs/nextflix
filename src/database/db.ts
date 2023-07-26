import mongoose from 'mongoose';

interface IConnection {
  isConnected: number
}

const connection = {
  isConnected: 0
};


const uri = process.env.MONGODB_URI

async function connect() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(uri!);
    console.log('conectado!')
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = 0;
        }
    }
    console.log('desconectado!')
}
const db = { connect, disconnect };
export default db;