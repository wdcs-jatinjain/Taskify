// src/app/components/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import NavbarComponent from '../components/Navbar';

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps,{ params }: any) => {
    return (
        <div>
            <header><NavbarComponent /></header>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
