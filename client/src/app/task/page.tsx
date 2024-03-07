'use client'
import React, { useEffect, useState } from 'react'
import MainLayout from '@/app/layouts/main'
import Link from 'next/link'
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { tasksData } from '@/types';
import RemoveBtn from '../components/Buttons/RemoveBtn';


interface Tasks {
    title: string,
    description: string,
    subCatagory: string,
    status: string,
    priority: string
}





function Tasks() {
    const [tasks, setTasks] = useState([])
    const router = useRouter()
    const fetchData = async () => {
        try {
            const res = await fetch(`/api/task/all-task`, {
                cache: 'no-store',
            });

            if (!res.ok) {
                throw new Error('Failed to fetch the tasks');
            }

            const taskData = await res.json();
            setTasks(taskData.data);
        } catch (error) {
            console.error('Error Loading Topics:', error);
        }
    };

    useEffect(() => {


        fetchData();
    }, []);





    return <MainLayout>
        < div className="text-black-200 body-font h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-indigo-600">Tasks</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Keep track of your work!</p>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto justify-end">
                        <Link href={"/task/add"}>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Task</button>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200 rounded-tl rounded-bl">title</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">description</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">catagory</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">status</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">priority</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">edit</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">del</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200 rounded-tl rounded-bl"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {tasks && tasks.length > 0 ? (
                                tasks.map((t: tasksData) => (
                                    <tr key={t._id}>
                                        <td className="px-4 py-3">{t.title}</td>
                                        <td className="px-4 py-3">{t.description}</td>
                                        <td className="px-4 py-3">{t.subCatagory}</td>
                                        <td className="px-4 py-3 text-lg">{t.status}</td>
                                        <td className="px-4 py-3 text-lg">{t.priority}</td>
                                        <td className="px-4 py-1 text-lg"><Link href={`/task/edit/${t._id}`}> <FiEdit3 size={24} />
                                        </Link>
                                        </td>
                                        <td className="px-4 py-1 text-lg"> <RemoveBtn id={t._id} />

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className='ml-'>No tasks available</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    </MainLayout>


}

export default Tasks