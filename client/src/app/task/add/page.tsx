'use client'
import React, { useState } from 'react';


const AddTaskPage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [priority, setPriority] = useState<string>('');

    const handleAddTask = () => {
        // Here you can implement the logic to add the task using the title, category, status, and priority
        console.log('Task added:', { title, category, status, priority });
        // Reset the form after adding the task
        setTitle('');
        setCategory('');
        setStatus('');
        setPriority('');
    };


    return (
        <div className="container mx-auto px-8 py-8">
            <h2 className="text-2xl font-medium mb-4">Add Task</h2>
            <div className='mx-auto px-20 py-8'>


                <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
                        <input
                            type="text"
                            id="category"
                            className="mt-1 p-2 border  text-black border-gray-300 rounded-md w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="status" className="block text-sm font-medium text-gray-300">Status</label>
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
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-300">Priority</label>
                            <select
                                id="priority"
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
    );
}
export default AddTaskPage