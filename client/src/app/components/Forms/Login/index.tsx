'use client'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUserValidation } from '@/app/register/validation';
import { RESULT_STATUS } from '@/constants';
import { useRouter } from 'next/navigation';

const LoginFormComponent = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginUserValidation) })
    const onSubmit = async (data: any) => {
        console.log("🚀 ~ onSubmit ~ data:", data)
        try {
            loginUserValidation.isValidSync({ ...data }, { abortEarly: false });

            const response = await fetch('api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.status === RESULT_STATUS.SUCCESS) {
                router.push('/');
            } else {
                console.log(RESULT_STATUS.FAILURE);
            }
        } catch (error) {
            console.error('Error while login:', error);
        }


    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col align-middle bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email*
                </label>
                <input
                    {...register('email')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
                <span className="text-red-500">{errors.email?.message}</span>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password*
                </label>
                <div className="relative">
                    <input
                        {...register('password')}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="******************"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {showPassword ? (
                            <FaRegEye onClick={togglePasswordVisibility} style={{ color: 'black' }} className="text-gray-500 cursor-pointer" />
                        ) : (
                            <FaRegEyeSlash onClick={togglePasswordVisibility} style={{ color: 'black' }} className="text-gray-500 cursor-pointer" />
                        )}
                    </span>
                    <span className="text-red-500">{errors.password?.message}</span>

                </div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginFormComponent