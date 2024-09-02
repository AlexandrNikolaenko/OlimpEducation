'use client'

import Logo from "./logo";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full">
            <div className="wrapper mx-auto flex justify-between items-center py-2 px-0 max-[1280px]:px-5 gap-6 max-[490px]:flex-col">
                <div>
                    <span className="text-bright max-[530px]:text-sm">Разработка, дизайн: </span>
                    <Link href={'https://t.me/AliBabagg'} className="max-[530px]:text-sm">Николаенко Александр</Link>
                </div>
                <Logo />
                <div>
                    <span className="text-bright max-[530px]:text-sm">Автор проекта: </span>
                    <Link href={'https://t.me/tasyagri'} className="max-[530px]:text-sm">Возчикова Таисия</Link>
                </div>
            </div>
        </footer>
    )
}