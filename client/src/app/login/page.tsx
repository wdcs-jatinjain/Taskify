import React from 'react'
import LoginFormComponent from '../components/Forms/Login'

const LoginPage = () => {
    return (

        <div className="w-full max-w-xs mx-auto mt-36 h-36 items-center">
            <h1 className="text-center text-xl font-bold mb-4">Login</h1>
            <LoginFormComponent />
        </div>
    )
}

export default LoginPage