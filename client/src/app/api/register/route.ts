'use server';
import { NextResponse } from "next/server";
import { API_URL } from "../../../config"
import { responseData } from "../../../types";
import { cookies } from "next/headers";


export async function POST(req: Request) {
    try {
        const { name, email, password, contactNo } = await req.json()
        const response = await fetch(`${API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, contactNo })
        });
        const data: responseData = await response.json()
        if (data.status === 'Success') {
            cookies().set('token', data?.data?.token as string)
            return NextResponse.json(data)
        } else {
            return NextResponse.json({
                status: "Failure",
                message: "Something went wrong while creating user"
            })
        }

    } catch (error) {
        console.error('Error registering user:', error);

    }
}