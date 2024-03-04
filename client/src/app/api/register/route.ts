'use server';
import { NextResponse } from "next/server";
import { API_URL } from "../../../config"
import { RegisterDataType } from "../../../types";
import { cookies } from "next/headers";


export async function POST(req: Request) {
    try {
        const { name, email, password, contactNo, catagories } = await req.json()
        const registerRes = await fetch(`${API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, contactNo, catagories })
        });
        const data: RegisterDataType = await registerRes.json()
        if (data.status === 'Success') {
            cookies().set('token', data?.token as string)
            cookies().set('id', data?.userId as string)

            return NextResponse.json(data)
        } else {
            return NextResponse.json({
                status: "Failure",
                message: "Something went wrong while creating user."
            })
        }

    } catch (error) {
        console.error('Error registering user:', error);

    }
}