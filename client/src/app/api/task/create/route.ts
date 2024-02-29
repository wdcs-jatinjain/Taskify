'use server';
import { NextResponse } from "next/server";
import { API_URL } from "../../../../config"
import { addTaskDataType } from "@/types";
import { cookies } from "next/headers";


export async function POST(req: Request) {

    // const cookieStore = cookies()
    // const userId = cookieStore.get('id')


    // console.log("🚀 ~ userId:", userId)


    try {
        const { title, description, subcatagory, status, assignTask } = await req.json()
        console.log("🚀 ~ POST ~ title, description, subcatagory, status, assignTask:", title, description, subcatagory, status, assignTask)
        const addTaskRes = await fetch(`${API_URL}/task/addtask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, subcatagory, status, assignTask })
        });
        const data: addTaskDataType = await addTaskRes.json()
        // return data
        if (data.status === 'Success') {

            return NextResponse.json(data)
        } else {
            return NextResponse.json({
                status: "Failure",
                message: "Something went wrong while adding new task."
            })
        }

    } catch (error) {
        console.error('Error while adding new task:', error);

    }
}