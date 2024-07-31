'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

export default function Header(){
    const [userName, setUserName] = useState(null);

    return (
        <header className="fixed w-full bg-main/70 backdrop-blur-xl z-50 border-b-light-main border-b-[1px]">
            <div className="wrapper mx-auto flex justify-between items-center py-3">
                <Logo />
                <div className="">
                    {userName == null ? <Link href={'/login'}><Image alt='Entrance' src={'/Entrance.svg'} width={15} height={18}/></Link> : <div className=""><p>{userName}</p><Link></Link></div>}
                </div>
            </div>
        </header>
    )
}