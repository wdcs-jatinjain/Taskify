'use client'

import MainLayout from '@/app/layouts/main';
import { RESULT_STATUS } from '@/constants';
import React, { useState } from 'react';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { addTaskDataType } from '@/types';



const AddTaskPage: React.FC = () => {
    const router = useRouter();



    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [subCatagory, setSubCatagory] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [priority, setPriority] = useState<string>('');



    // setTitle('');
    // setDescription('');
    // setSubCatagory('');
    // setStatus('');
    // setPriority('');
    const taskData = {
        title,
        description,
        subCatagory,
        status,
        priority
    };



    const handleAddTask = async (taskData: addTaskDataType) => {




        try {
            // console.log("🚀 ~ handleAddTask ~ taskData:", taskData)

            const response = await fetch(`/api/task/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });
            console.log("🚀 ~ handleAddTask ~ taskData:", taskData)

            const responseData = await response.json();
            // console.log("🚀 ~ handleAddTask ~ responseData:", responseData)

            if (responseData.status === RESULT_STATUS.SUCCESS) {
                router.push('/task');
                return NextResponse.json(taskData);
            } else {
                console.log(RESULT_STATUS.FAILURE);
                return NextResponse.error()
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }



    };


    return (
        <MainLayout  >
            <div className="container mx-auto px-8 py-8 h-screen">
                <h2 className="text-2xl font-medium mb-4">Add Task</h2>
                <div className='mx-auto px-20 py-8'>


                    <form onSubmit={(e) => { e.preventDefault(); handleAddTask(taskData); }}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-black">Description</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subCatagory" className="block text-sm font-medium text-black">Category</label>
                            <input
                                type="text"
                                id="subCatagory"
                                className="mt-1 p-2 border  text-black border-gray-300 rounded-md w-full"
                                value={subCatagory}
                                onChange={(e) => setSubCatagory(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="status" className="block text-sm font-medium text-black">Status</label>
                                <select
                                    id="status"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="assign to" className="block text-sm font-medium text-black">priority To</label>
                                <select
                                    id="assign to"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex ">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </MainLayout >
    );
}
export default AddTaskPage