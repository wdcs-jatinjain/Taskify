// 'use server';
// import { NextResponse } from "next/server";
// import { API_URL } from "../../../../config"
// import { addTaskeReturnDataType } from "../../../../types";
// import { cookies } from "next/headers";
// import { RESULT_STATUS } from "../../../../constants";


// export async function PUT(req: Request, { params }: { params: { taskId: string } }) {

//     const cookieStore = cookies()
//     const userId: any = cookieStore.get('id')
//     const id = userId.value;




//     try {
//         const { title, description, subCatagory, status, priority } = await req.json()

//         const payload = {
//             userId: id,
//             title,
//             description,
//             subCatagory,
//             status,
//             priority
//         };

//         const addTaskRes = await fetch(`${API_URL}/task/edittask?id=${params.taskId}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload)
//         });
//         const data: addTaskeReturnDataType = await addTaskRes.json()
//         if (data.status === RESULT_STATUS.SUCCESS) {

//             return NextResponse.json(data)
//         } else {
//             return NextResponse.json({
//                 status: RESULT_STATUS.FAILURE,
//                 message: "Something went wrong while adding new task."
//             })
//         }

//     } catch (error) {
//         console.error('Error while adding new task:', error);

//     }
// }