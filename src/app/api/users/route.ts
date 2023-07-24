import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
import database from "@/database/db"

import UserModel from "@/database/models/User";
import { setCookie } from "nookies";

const secret = process.env.SECRET

export async function GET(request: Request) {
  database.connect()

  try {
    const users = await UserModel.find();

    return NextResponse.json([users, {msg: "sucess!"}], {status: 201})
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: Request) {
  database.connect()
  
  {
    try {
      const user = await request.json()

      if (!user.email) {
        return NextResponse.json({msg: "Email obrigatorio!"}, {status: 422})
      }
      if (!user.password) {
        return NextResponse.json({msg: "Senha obrigatoria!"}, {status: 422})
      }
  
      const response = await UserModel.create(user);
  
      const token = jwt.sign(
        {
          id: response.id
        }, secret
      )
        
      const json = JSON.stringify(response, token, secret)

      setCookie(null, 'token', token)

      const responseData:any = {
        token,
        user: response
      }

      return new Response(JSON.stringify(responseData), {
        status: 201,
        headers: { 'Set-Cookie': `token=${token}` },
      })
    } catch (error) {
      console.log("Ocorreu um erro na requisição!", error);
    }}

  database.disconnect()
}
