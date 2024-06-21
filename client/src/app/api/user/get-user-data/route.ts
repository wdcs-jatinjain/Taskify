import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import {  getUserDataRes } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request,  { params }: { params: { userId: string }}) {
 


    try {
        const getuserdata = await fetch(`${API_URL}/task/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const getUserData: getUserDataRes = await getuserdata.json()

        if (getUserData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(getUserData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while fetching userdata."
            })
        }


    } catch (error) {
        console.error('Error while getting user data:', error);
    }
}
