'use client'

import Logo from "./logo";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full">
            <div className="wrapper mx-auto flex justify-between items-center py-2 px-0 max-[1280px]:px-5">
                <div>
                    <span className="text-bright">Разработка, дизайн: </span>
                    <Link href={'https://t.me/AliBabagg'}>Николаенко Александр</Link>
                </div>
                <Logo />
                <div>
                    <span className="text-bright">Автор проекта: </span>
                    <Link href={'https://t.me/tasyagri'}>Возчикова Таисия</Link>
                </div>
            </div>
        </footer>
    )
}