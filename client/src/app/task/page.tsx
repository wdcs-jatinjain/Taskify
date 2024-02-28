'use client'
import React from 'react'
import MainLayout from '@/app/layouts/main'
import Link from 'next/link'
import { FiEdit3 } from "react-icons/fi";


const Tasks: React.FC = () => {


    return <MainLayout>
        < div className="text-black-200 body-font h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-indigo-600">Tasks</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Keep track of your work!</p>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200 rounded-tl rounded-bl">title</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">catagory</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">status</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200">priority</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-indigo-200"></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">Start</td>
                                <td className="px-4 py-3">5 Mb/s</td>
                                <td className="px-4 py-3">15 GB</td>
                                <td className="px-4 py-3 text-lg ">Free</td>
                                <td className="px-4 py-1 text-lg "><FiEdit3 /></td>

                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-400 px-4 py-3">Pro</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3">25 Mb/s</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3">25 GB</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3 text-">$24</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3 text-lg "><FiEdit3 /></td>

                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-400 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3 text-lg ">$50</td>
                                <td className="border-t-2 border-gray-400 px-4 py-3 text-lg "><FiEdit3 /></td>

                            </tr>
                            <tr>
                                <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3">Exclusive</td>
                                <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3">48 Mb/s</td>
                                <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3">120 GB</td>
                                <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3 text-lg ">$72</td>
                                <td className="border-t-2 border-b-2 border-gray-400 px-4 py-3 text-lg "><FiEdit3 /></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <Link href={"/task/add"}>
                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Task</button>
                    </Link>
                </div>
            </div>
        </div>

    </MainLayout>


}

export default Tasks