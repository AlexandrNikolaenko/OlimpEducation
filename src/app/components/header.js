'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import Login from "./login"

export default function Header(){
    const [userName, setUserName] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function close(name) {
        setUserName(name);
        setIsOpen(false)
    }
    

    return (
        <>
            <header className="fixed w-full bg-main/70 backdrop-blur-xl z-50 border-b-light-main px-0 border-b-[1px] max-[1280px]:px-5">
                <div className="wrapper mx-auto flex justify-between items-center py-3">
                    <Logo />
                    <div className="">
                        {userName == null 
                            ? 
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <Image alt='Entrance' src={'/Entrance.svg'} width={15} height={18}/>
                            </button>
                            : 
                            <div className="">
                                <p>{userName}</p>
                                <button onClick={() => setUserName(null)}>
                                    <Image alt='Exit' src={'/Exit.svg'} width={15} height={18}/>
                                </button>
                            </div>}
                    </div>
                </div>
            </header>
            {isOpen ? <Login close={close}/> : <></>}
        </>
    )
}