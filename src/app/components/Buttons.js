'use client'

export function ScrollButton({id, text}){
    return <button className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] max-[1146px]:px-5 py-2.5 max-[1146px]:py-2 bg-bright hover:bg-light-main transition-colors duration-500 rounded-[10px] max-[1146px]:text-lg/[25px]" onClick={() => {document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center'})}}>{text}</button>
}