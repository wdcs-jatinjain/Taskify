'use client'

import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useRouter } from 'next/navigation';


export default function RemoveBtn({ taskId }: any) {
    const router = useRouter()
    const removeTask = async () => {
        const confirmed = confirm("Are you sure!");

        if (confirmed) {
            const res = await fetch(`/api/task/deletetask/${taskId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                router.refresh();
            };
        }
    }

    return (
        <button onClick={removeTask} >
            < FaTrash size={24} />
        </button>
    )
}

