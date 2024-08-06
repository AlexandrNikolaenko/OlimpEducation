'use client'

export function ScrollButton({id, text}){
    return <button className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] py-2.5 bg-bright hover:bg-light-main transition-colors duration-500 rounded-[10px]" onClick={() => {document.getElementById(id).scrollIntoView({behavior: 'smooth'})}}>{text}</button>
}