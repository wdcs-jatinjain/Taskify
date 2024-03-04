'use client'

import MainLayout from '@/app/layouts/main';
import { RESULT_STATUS } from '@/constants';
import React, { useEffect, useState } from 'react';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { addTaskDataType, editTaskDataType } from '@/types';



const AddTaskPage: React.FC = () => {
    const router = useRouter();



    const [newTitle, setNewTitle] = useState<string>('');
    const [newDescription, setnewDescription] = useState<string>('');
    const [selectedCatagory, setSelectedCatagory] = useState<string>('');

    const [newSubCatagory, setSubCatagory] = useState<string>('');
    const [newStatus, setNewStatus] = useState<string>('');
    const [newPriority, setNewPriority] = useState<string>('');




    const editTaskData = {
        newTitle,
        newDescription,
        newSubCatagory,
        newStatus,
        newPriority,
    };

    const fetchAllSubCatagories = async () => {
        try {
            const res = await fetch(`/api/task/allrask/${id}`, {
                // cache: 'no-store',
            });

            if (!res.ok) {
                throw new Error('Failed to fetch the catagories');
            }

            const data = await res.json();
            console.log("🚀 ~ fetchAllSubCatagories ~ data:", data)
            setSubCatagory(data.data.subcategories);
        } catch (error) {
            console.error('Error Loading Catagories:', error);
        }
    };

    useEffect(() => {


        fetchAllSubCatagories();
    }, []);



    const handleAddTask = async (editTaskData: editTaskDataType) => {




        try {

            const response = await fetch(`/api/task/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editTaskData)
            });

            const responseData = await response.json();

            if (responseData.status === RESULT_STATUS.SUCCESS) {
                router.push('/task');
                return NextResponse.json(editTaskData);
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


                    <form onSubmit={(e) => { e.preventDefault(); handleAddTask(editTaskData); }}>
                        <div className="mb-4">
                            <label htmlFor="newTitle" className="block text-sm font-medium text-black">newTitle</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newDescription" className="block text-sm font-medium text-black">newDescription</label>
                            <input
                                type="text"
                                id="desc"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={newDescription}
                                onChange={(e) => setnewDescription(e.target.value)}
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="newSubCatagory" className="block text-sm font-medium text-black">Catagory</label>
                            <select
                                id="newSubCatagory"
                                className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                value={selectedCatagory}
                                onChange={(e) => {
                                    console.log("🚀 ~ e:", e.target.value)

                                    setSelectedCatagory(e.target.value)
                                }
                                }
                            >
                                <option value="">Catagories</option>
                                {Array.isArray(newSubCatagory) && newSubCatagory.map((category: { _id: string, name: string }) => (
                                    <option key={category._id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>




                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="newStatus" className="block text-sm font-medium text-black">Status</label>
                                <select
                                    id="newStatus"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={newStatus}
                                    onChange={(e) => setNewStatus(e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    <option value="ToDo">ToDo</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label htmlFor="newPriority" className="block text-sm font-medium text-black">priority To</label>
                                <select
                                    id="newPriority"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                                    value={newPriority}
                                    onChange={(e) => setNewPriority(e.target.value)}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="high">high</option>
                                    <option value="medium">medium</option>
                                    <option value="low">low</option>
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