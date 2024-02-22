
import React from 'react';
import RegistrationForm from '../components/Forms/Register';

const RegistrationPage = () => {
    return (
        <div>
            <div className="w-full max-w-xs mx-auto mt-8 h-36">
                <h1 className="text-center text-xl font-bold mb-4">Register</h1>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default RegistrationPage;