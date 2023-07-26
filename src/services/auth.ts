import axios from "axios"
import { setCookie } from "nookies"


type SignUpRequestData = {
  email: string,
  password: string
}

export async function signUpRequest(data: SignUpRequestData) {
    const response = await axios.post('http://localhost:3000/api/users', data)
    console.log('SIGN UP REQUEST RESPONSE', response.data)
    return response.data
}