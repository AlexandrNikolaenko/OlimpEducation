'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "./logo";
import Login from "./login"

export default function Header(){
    const [userName, setUserName] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isWindow, setIsWindow] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!isWindow) {
            setIsWindow(typeof window != 'undefined');
        }
    })

    if (!isWindow) return <></>

    let storage = window.localStorage;

    if (storage.getItem('userName') != "undefined" && storage.getItem("userName") != userName) {
        setUserName(storage.getItem('userName'));
    }

    function close(name, userId) {
        setUserName(name);
        setIsOpen(false);
        storage.setItem('userName', name);
        storage.setItem('userId', userId);
        window.location.reload();
    }

    function exit() {
        setUserName(null);
        storage.clear();
        window.location.reload();
    }

    return (
        <>
            <header className="fixed w-full bg-main/70 backdrop-blur-xl z-50 border-b-light-main px-0 border-b-[1px] max-[1280px]:px-5">
                <div className="wrapper mx-auto flex justify-between items-center py-3 max-sm:py-2.5">
                    <Logo />
                    <>
                        {userName == null 
                            ? 
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <Image alt='Enter' src={'/Entrance.svg'} width={15} height={18}/>
                            </button>
                            : 
                            <div className="flex gap-x-3">
                                <p className="font-serif text-lg max-w-60 font-normal max-md:text-base max-md:max-w-52 max-sm:max-w-48 max-sm:text-sm max-[448px]:text-[10px] text-nowrap max-[448px]:max-w-32 overflow-hidden">{userName}</p>
                                <button onClick={() => exit()}>
                                    <Image alt='Exit' src={'/Exit.svg'} width={15} height={18}/>
                                </button>
                            </div>}
                    </>
                </div>
            </header>
            {isOpen ? <Login close={close}/> : <></>}
        </>
    )
}