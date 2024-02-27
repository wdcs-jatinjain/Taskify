"use client"
import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { registerUserValidation } from '@/app/register/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { RESULT_STATUS } from '@/constants';
import { NextResponse } from 'next/server';
import Link from 'next/link';


export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerUserValidation) })

    const onSubmit = async (data: any) => {

        try {
            await registerUserValidation.isValidSync({ ...data }, { abortEarly: false });

            const response = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if (responseData.status === RESULT_STATUS.SUCCESS) {
                router.push('/');
                return NextResponse.json(data);
            } else {
                console.log(RESULT_STATUS.FAILURE);
                return NextResponse.error()
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name*
                </label>
                <input
                    {...register('name')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"

                />
                <span className="text-red-500">{errors.name?.message}</span>
            </div>
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


            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
                    Contact No
                </label>
                <input
                    {...register('contactNo')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="contactNo"
                    type="text"
                    placeholder="Contact No"
                />
                <span className="text-red-500">{errors.contactNo?.message}</span>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
            </div>
            <div className='flex items-center justify-center text-sm mt-6'>

                <p className='text-black'>Already have an account <Link href={"login"} className='text-blue-500'>Login now!</Link></p>
            </div>
        </form>
    );
}
