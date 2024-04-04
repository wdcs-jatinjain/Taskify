
import React from 'react';
import RegistrationForm from '../components/Forms/Register';
import AuthLayout from '../layouts/auth';

const RegistrationPage = () => {
    return (
        <AuthLayout>
                 <div className="w-full mx-auto h-screen flex items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <h1 className="text-center text-xl font-bold mb-4">Register</h1>
                    <RegistrationForm />
                </div>
            </div>
        </AuthLayout>
    );
};

export default RegistrationPage;