const jwt = require('jsonwebtoken');

// signing jwt
export function signJwtToken(payload:object, options = {}) {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);
    return token;
}


// verifying jwt
export function verifyJwtToken(token:string) {
    try {
        const secret = process.env.JWT_SECRET;
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        console.error(error);
        return null;
    }
}