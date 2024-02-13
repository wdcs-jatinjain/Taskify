import { NextResponse } from "next/server";
import { API_URL } from "../../../config"
import { registerUserValidation } from "../../registration/validation";


export async function POST(req: Request) {
    try {
        const { name, email, password, contactNo } = await req.json()
        await registerUserValidation.isValidSync({ name, email, password, contactNo }, { abortEarly: false });
        const response = await fetch(`${API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, contactNo })
        });
        const data = await response.json()
        return NextResponse.json(data)


    } catch (error) {
        console.error('Error registering user:', error);

    }
}