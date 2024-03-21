import { API_URL } from "@/config";
import { RESULT_STATUS } from "@/constants";
import {  updateOrderType } from "@/types";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { taskId: string } }) {



    try {
        const {TaskIds} = await req.json()

        const editTasksRes = await fetch(`${API_URL}/task/ordertask`, {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
            body: JSON.stringify(TaskIds)


        });
        const updateOrderInDatabase: updateOrderType = await editTasksRes.json()

        if (updateOrderInDatabase.status === RESULT_STATUS.SUCCESS) {

            return NextResponse.json(updateOrderInDatabase)
        } else {
            return NextResponse.json({
                status: RESULT_STATUS.FAILURE,
                message: "Something went wrong while updaing the order"
            })
        }


    } catch (error) {
        console.error('Error while saving the edited  task:', error);
    }
}
