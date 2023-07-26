import { NextResponse } from "next/server";
import database from "@/database/db"

import UserModel from "@/database/models/User";
import { Context } from "vm";

export async function GET(request: Request, context: Context) {
  database.connect()
  const { searchParams } = new URL(request.url)
  
  try {
    const id = context.params.id
    
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({msg: 'ID INCORRETO'}, {status: 404})
  }

    const user = await UserModel.findById(id, '-password');

    if (!user) {
      return NextResponse.json({msg: 'Nao encontrou nada'}, {status: 404})
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
  database.disconnect()
}

export async function DELETE(request: Request, context: Context) {
  database.connect()
  const { searchParams } = new URL(request.url)

  try {
    const id = context.params.id
    
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({msg: 'ID INCORRETO'}, {status: 404})
  }

    const user = await UserModel.findById(id);

    if (!user) {
      return NextResponse.json({msg: "Nao encontrado!"}, {status: 404})
    }

    const deletedUser = await UserModel.findByIdAndDelete(id);
      
    return NextResponse.json([deletedUser, { msg: 'User deletado!'}], {status: 200})
  } catch (error) {
    console.log(error);
  }
  database.disconnect()
}

export async function UPDATE(request: Request, context: Context) {
  database.connect()
  const { searchParams } = new URL(request.url)
  try {
    const user = {
      name: searchParams.get('name'),
      email: searchParams.get('email'),
      password: searchParams.get('password')
    };
    
    const id = context.params.id
    
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({msg: 'ID INCORRETO'}, {status: 404})
  }

    const updatedUser = await UserModel.findByIdAndUpdate(id, user);

    if (!updatedUser) {
      return NextResponse.json({msg: "Nao encontrado!"}, {status: 404})
    }

    return NextResponse.json(user, {status: 202})
  } catch (error) {
    console.log(error);
  }
  database.disconnect()

}
