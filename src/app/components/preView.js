'use client' 

import { ScrollButton } from "./Buttons";
import { useState, useEffect } from "react";

const path = 'http://localhost:3000/'

export default function PreView (){
    const [isWindow, setIsWindow] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!isWindow) {
            setIsWindow(typeof window != 'undefined');
        }
    });

    if (!isWindow) return <></>

    if (window.innerWidth > 900) {
        return (
            <section className="h-screen bg-cover bg-no-repeat bg-right-bottom  border-b-light-main border-b-[1px] max-[1146px]:h-auto " style={{backgroundImage: `url(${path}MainFon.png)`}}>
                <div className="wrapper px-0 mx-auto flex flex-col justify-center h-full bg-right-[-30px] max-[1280px]:px-5 max-[1146px]:py-28 bg-cover lg:bg-contain bg-no-repeat bg-right-bottom" style={{backgroundImage: `url(${path}BigFon.png)`}}>
                    <div className="flex flex-col gap-7 items-start w-[738px] max-[1146px]:w-[506px]">
                        <span className="bg-clip-text bg-gradient-to-r from-bright to-medium text-7xl text-transparent font-extrabold font-title max-[1146px]:text-[64px]">OlimpEducation</span>
                        <h4 className="font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] max-[1146px]:text-2xl/[1.3em]">Наш проект <span className="font-help text-bright">облегчит</span> подготовку к <span className="font-help text-bright">олимпиадам</span>!</h4>
                        <p className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] max-[1146px]:text-lg/[25px]">Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения
                        Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!</p>
                        <ScrollButton text={'Начать'} id={'choice-section'}/>
                    </div> 
                </div>
            </section>
        );
      } else if (window.innerWidth < 683) {
        return (
            <section className="h-screen bg-cover bg-right-bottom bg-no-repeat border-b-light-main border-b-[1px] min-[683px]:max-[900px]:h-auto " style={{backgroundImage: `url(${path}SmallFon.png)`}}>
                <div className="wrapper px-0 mx-auto flex flex-col justify-center h-full max-[1280px]:px-5 max-[900px]:py-28">
                    <div className="flex flex-col gap-7 items-start w-full">
                        <span className="bg-clip-text bg-gradient-to-r from-bright to-medium text-[44px] text-transparent font-extrabold font-title max-[340px]:text-[38px]">OlimpEducation</span>
                        <h4 className="font-help text-lg/[1.3em] font-normal tracking-[0.04em]">Наш проект <span className="font-help text-bright">облегчит</span> подготовку к <span className="font-help text-bright">олимпиадам</span>!</h4>
                        <p className="font-sans text-sm/[25px] font-normal tracking-[0.02em]">Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения
                        Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!</p>
                        <ScrollButton text={'Начать'} id={'choice-section'}/>
                    </div> 
                </div>
            </section>
        );
      }else{
        return (
            <section className="h-screen bg-cover bg-no-repeat bg-right-bottom border-b-light-main border-b-[1px] max-[900px]:h-auto " style={{backgroundImage: `url(${path}MiddleFon.png)`}}>
                <div className="wrapper px-0 mx-auto flex flex-col justify-center h-full max-[1280px]:px-5 max-[900px]:py-28">
                        <div className="flex flex-col gap-7 items-start w-[738px] max-[1146px]:w-[506px]">
                            <span className="bg-clip-text bg-gradient-to-r from-bright to-medium text-7xl text-transparent font-extrabold font-title max-[1146px]:text-[64px]">OlimpEducation</span>
                            <h4 className="font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] max-[1146px]:text-2xl/[1.3em]">Наш проект <span className="font-help text-bright">облегчит</span> подготовку к <span className="font-help text-bright">олимпиадам</span>!</h4>
                            <p className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] max-[1146px]:text-lg/[25px]">Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения
                            Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!</p>
                            <ScrollButton text={'Начать'} id={'choice-section'}/>
                        </div> 
                    </div>
            </section>
        );
      }
      
}