import React from 'react'
import LoginFormComponent from '../components/Forms/Login'
import AuthLayout from '../layouts/auth'

const LoginPage = () => {
    return (

        <div className="w-full max-w-xs mx-auto h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <h1 className="text-center text-xl font-bold mb-4">Login</h1>
            <LoginFormComponent />
        </div>
    </div>
    )
}

export default LoginPage;