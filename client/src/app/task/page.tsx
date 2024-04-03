"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/layouts/main";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { tasksData } from "@/types";
import RemoveBtn from "../components/Buttons/RemoveBtn";


function Tasks() {
    const [tasks, setTasks] = useState<tasksData[]>([]);

    const onDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
        // Send the new order to the backend
        const taskIds = items.map(task => task._id);
        updateOrderInDatabase(taskIds);
        };

        const updateOrderInDatabase = async (taskIds: string[]) => {
        try {
            const response = await fetch('/api/tasks/update-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ taskIds }),
            });

            if (!response.ok) {
            throw new Error('Failed to update order');
            }

        } catch (error) {
            console.error('Error updating order:', error);
        }
        };
    const fetchData = async () => {
        try {
            const res = await fetch(`/api/task/all-task`, {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch the tasks");
            }

            const taskData = await res.json();
            setTasks(taskData.data);
        } catch (error) {
            console.error("Error Loading Topics:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <MainLayout>
            <div className="text-black-200 sm:rounded-lg body-font h-screen bg-gray-50">
                 <div className="container px-5 py-24 mx-auto">
                     <div className="flex flex-col text-center w-full mb-20">
                            <div className="flex  ">

                                <Link href={"/task"} className="inline-flex pl-2 text-indigo-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0" aria-current="page">Tasks</Link>

                            </div>
                         <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto justify-end">
                             <Link href={"/task/add"}>
                                 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Task</button>
                             </Link>
                         </div>
                     </div>
                <div className="w-full mx-auto overflow-auto rounded-lg shadow-lg">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="order">
                            {(provided: any) => (
                                <table
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="table-auto w-full text-left whitespace-no-wrap rounded-lg overflow-hidden"
                                >
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200 rounded-tl">
                                                Title
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">
                                                Description
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">
                                                Category
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">
                                                Priority
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">
                                                Edit
                                            </th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200 rounded-tr">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                        {tasks.length === 0 ? (
                                            <p >No Task Available </p>
                                        ):(
                                    <tbody>
                                        {tasks.map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided: any) => (
                                                    <tr
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        className={`hover:bg-gray-100`}                                                    
                                                        >
                                                        <td className="px-4 py-3">{task.title}</td>
                                                        <td className="px-4 py-3">{task.description}</td>
                                                        <td className="px-4 py-3">{task.subCatagory}</td>
                                                        <td className="px-4 py-3 text-lg font-semibold">
                                                            {task.status}
                                                        </td>
                                                        <td className="px-4 py-3 text-lg font-semibold">
                                                            {task.priority}
                                                        </td>
                                                        <td className="px-4 py-1 text-lg">
                                                            <Link href={`/task/edit/${task._id}`}>
                                                                <FiEdit3
                                                                    size={24}
                                                                    className="text-indigo-600 hover:text-indigo-800"
                                                                />
                                                            </Link>
                                                        </td>
                                                        <td className="px-4 py-1 text-lg">
                                                            <RemoveBtn taskId={task._id} />
                                                        </td>
                                                    </tr>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                        
                                    </tbody>
                                    )}
                                </table>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
               </div>
            </div>
        </MainLayout>
    );
}

export default Tasks;
