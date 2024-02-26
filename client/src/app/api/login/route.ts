import { API_URL } from "@/config";
import { responseData } from "@/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        const response = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const data: responseData = await response.json()

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error loging user:', error);

    }
}