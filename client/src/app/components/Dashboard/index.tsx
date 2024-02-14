import React from 'react'
import Navbar from '../Navbar'
import { redirect } from 'next/navigation'

const Dashoard = () => {
    const session = {
        user: {
            token: 'ss'
        }
    }
    if (session.user?.token.length > 0) {
        return (
            <div>
                <Navbar />
            </div>
        )
    } else {
        redirect('/login')
    }

}

export default Dashoard