import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { LoginDataType } from "@/types";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        const loginRes = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const LoginData: LoginDataType = await loginRes.json()
        if (LoginData.status === RESULT_STATUS.SUCCESS) {
            cookies().set('token', LoginData?.token as string)
            cookies().set('id', LoginData?.userId as string)
            return NextResponse.json(LoginData)
        } else {
            let errorMessage = "An error occurred during login.";
            if (LoginData.errorCode === 'INVALID_EMAIL') {
                errorMessage = "The email address is not valid.";
            } else if (LoginData.errorCode === 'INCORRECT_PASSWORD') {
                errorMessage = "The password is incorrect.";
            } else if (LoginData.errorCode === 'USER_NOT_FOUND') {
                errorMessage = "Account does not exist or is not registered.";
            }

            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: errorMessage
            });
        }
    } catch (error) {
        console.error('Error loging user:', error);

    }
}