"use client";
import React,{useState} from 'react';
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { Bars3Icon , XmarkIcon } from "@heroicons/react/24/solid"

const navlinks =[
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact"
    }
]

function Navbar() {
    const {navbarOpen, setNavbarOpen} = useState(false);
    return (
        <nav className='fixed top-0 left-10 right-10 z-10 bg-[#121212] bg-opaacity-90 mb-10 p-8'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-100 '>
                <Link href={"/"} className='text-lg md:text-3xl text-white font-semibold'>
                    jeRRy
                </Link>
                <div className='mobile-menu block md:hidden'>
                     
                      navnarOpen ? (
                        (<button className='text-slate-200 '>
                            <Bars3Icon className='h-5 w-5'/>

                        </button>) :
                        
                        (<button>
                            
                        </button>)
                      )

                </div>
                <div className='menu  hidden md:block md:w-auto justify-between' id='navbar'>
                    <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
                        {
                        navlinks.map((link, index) => (
                            <li key={index}>

                            <NavLink href={link.path} title={link.title}/>

                            </li>
                            ))}
                        

                        
                                            
                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;