import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { getSubCatagoriesReturnDataType, getTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

    const cookieStore = cookies()

    const userId: any = cookieStore.get('id')
    const id = userId.value;


    try {
        const getSubCatagoriesRes = await fetch(`${API_URL}/user/find?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const responseData: getSubCatagoriesReturnDataType = await getSubCatagoriesRes.json()

        if (responseData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(responseData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while getting the SubCatagories."
            })
        }






    } catch (error) {
        console.error('Error while adding new task:', error);
    }
}