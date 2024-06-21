'use client'
// import React from 'react'
// import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// import {  Link, DropdownItem,  DropdownMenu, Navbar, NavbarContent, Dropdown, DropdownTrigger, Avatar, } from "@nextui-org/react";


// const NavbarComponent = () => {

//     const router = useRouter()
//     const handleLogout = async () => {
//         await fetch("/api/logout");
//         router.push("/login");  
//     }
//     return (
//         <>
//         <Navbar>
//             <header className=" body-font">
//                 <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     <a className="flex title-font font-medium items-center text-indigo-600 mb-4 md:mb-0">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                         </svg>
//                         <span className="ml-3 text-xl">TASKIFY</span>
//                     </a>
//                     <nav className="md:ml-auto flex flex-wrap space-x-3 items-center text-base justify-center">
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex  ">

//                                 <Link href={"/task"} className="inline-flex pl-2 text-indigo-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0" aria-current="page">Tasks</Link>

//                             </div>
//                         </div>
//                         <div>
//                             {/* <button onClick={handleLogout} className="inline-flex text-red-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-red-400 hover:text-white rounded text-base mt-4 md:mt-0">Log out
//                                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//                                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                                 </svg>
//                             </button> */}
//                                      <NavbarContent as="div" justify="end">
//                                         <Dropdown placement="bottom-end">
//                                         <DropdownTrigger>
//                                             <Avatar
//                                             isBordered
//                                             as="button"
//                                             className="transition-transform"
//                                             color="secondary"
//                                             name="Jason Hughes"
                                            
//                                             src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//                                             />
//                                         </DropdownTrigger>
//                                         <DropdownMenu aria-label="Profile Actions" variant="flat">
//                                             <DropdownItem key="profile" className="h-10 gap-2">
//                                             <p className="font-semibold">Signed in as</p>
//                                             <p className="font-semibold">zoey@example.com</p>
//                                             </DropdownItem>
//                                             <DropdownItem key="settings">My Settings</DropdownItem>
//                                             <DropdownItem key="team_settings">Team Settings</DropdownItem>
//                                             <DropdownItem key="analytics">Analytics</DropdownItem>
//                                             <DropdownItem key="system">System</DropdownItem>
//                                             <DropdownItem key="configurations">Configurations</DropdownItem>
//                                             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//                                             <DropdownItem key="logout" color="danger">
//                                             Log Out
//                                             </DropdownItem>
//                                         </DropdownMenu>
//                                         </Dropdown>
//                                     </NavbarContent>
//                         </div>
//                     </nav>
//                 </div>
//             </header>
//             </Navbar>
//         </>
//     )
// }

// export default NavbarComponent



import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { getUserDataType } from "@/types";


export default function NavbarComponent({ userId }: { userId: string }) {
console.log("🚀 ~ NavbarComponent ~ userId:", userId)

    const [user, setUser] = useState<getUserDataType | null>(null);
    const router = useRouter();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(`/api/user/get-user-data/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData: getUserDataType = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        console.log("🚀 ~ getUserData ~ getUserData:", getUserData)

        getUserData();
    }, []); // Depend on userId to refetch if it changes


    
    const handleLogout = async () => {
                await fetch("/api/logout");
                router.push("/login");  
            }
  return (
    <Navbar  className="flex h-20">
      <NavbarBrand>
        <a className="flex title-font font-medium items-center text-indigo-600 mb-4 md:mb-0">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                         </svg>
                         <span className="ml-3 text-xl">TASKIFY</span>
                     </a>
      </NavbarBrand>
   
      <NavbarContent className="flex-grow justify-end">
                <Link href={"/task"} className="inline-flex pl-2 text-indigo-600 items-center border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0" aria-current="page">Tasks</Link>
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger >
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name={user?.name || "User"}
                                
                     
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat" >
                            <DropdownItem key="profile" className="h-10 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{user?.email}</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="edit_profile">Edit Profile</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </NavbarContent>
    </Navbar>
  );
}
