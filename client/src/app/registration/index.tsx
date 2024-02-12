import React from 'react';
import Layout from '../layout';
import RegistrationForm from '../forms/registrationForm';

const RegistrationPage: React.FC = () => {
    return (
        <Layout>
            <div className="w-full max-w-xs mx-auto mt-8 h-36">
                <h1 className="text-center text-xl font-bold mb-4">Register</h1>
                <RegistrationForm />
            </div>  
        </Layout>
    );
};

export default RegistrationPage;