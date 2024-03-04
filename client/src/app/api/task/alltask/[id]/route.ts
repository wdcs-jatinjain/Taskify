import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { editTasksReturnDataType } from "@/types";
import { NextResponse } from "next/server";

export async function PUT(req: any, res: Response) {
    const { id } = req.query


    try {
        const editTasksRes = await fetch(`${API_URL}/task/gettask?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const responseData: editTasksReturnDataType = await editTasksRes.json()

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
