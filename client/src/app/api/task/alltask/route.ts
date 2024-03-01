import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

    const cookieStore = cookies()

    const userId: any = cookieStore.get('id')
    const id = userId.value;
    console.log("🚀 ~ GET ~ id:", id)


    try {
        const getTasksRes = await fetch(`${API_URL}/task/gettask?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const responseData: getTasksReturnDataType = await getTasksRes.json()
        console.log("🚀 ~ GET ~ responseData:", responseData)

        if (responseData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(responseData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while fetching all tasks."
            })
        }






    } catch (error) {
        console.error('Error while adding new task:', error);
    }
}