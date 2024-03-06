import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import { deleteReturnDataType } from "@/types";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { taskId: string } }) {



    try {
        const deleteTaskRes = await fetch(`${API_URL}/task/deletetask?id=${params.taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const responseData: deleteReturnDataType = await deleteTaskRes.json()

        if (responseData.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(responseData)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while deleting the tasks."
            })
        }


    } catch (error) {
        console.error('Error while deleting task:', error);
    }
}
