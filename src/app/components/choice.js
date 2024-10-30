'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import TaskList from "./taskList"
import { tags } from "./Tags";

const path = 'http://localhost:3000/'

function ChoiceClass ({displayWidth, changeValue}) {
    let [choiceClass, setChoiceClass] = useState(8);

    switch (displayWidth) {
        case 'large' :
            return (
                <div className="rounded-[10px] overflow-hidden w-max flex gap-[2px]">
                    {choiceClass != 8 ? <button className='font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main' onClick={() => {changeValue(8); setChoiceClass(8)}}>8 класс</button> : <button className='font-serif text-xl font-normal px-[30px] py-2 bg-light-main' onClick={() => {changeValue(0); setChoiceClass(0)}}>8 класс</button>}
                    {choiceClass != 9 ? <button className='font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main' onClick={() => {changeValue(9); setChoiceClass(9)}}>9 класс</button> : <button className='font-serif text-xl font-normal px-[30px] py-2 bg-light-main ' onClick={() => {changeValue(0); setChoiceClass(0)}}>9 класс</button>}
                    {choiceClass != 10 ? <button className='font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main' onClick={() => {changeValue(10); setChoiceClass(10)}}>10 класс</button> : <button className='font-serif text-xl font-normal px-[30px] py-2 bg-light-main' onClick={() => {changeValue(0); setChoiceClass(0)}}>10 класс</button>}
                    {choiceClass != 11 ? <button className='font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main' onClick={() => {changeValue(11); setChoiceClass(11)}}>11 класс</button> : <button className='font-serif text-xl font-normal px-[30px] py-2 bg-light-main' onClick={() => {changeValue(0); setChoiceClass(0)}}>11 класс</button>}
                </div>
            )
        case 'little' :
            return (
                <div className="rounded-[10px] overflow-hidden w-max flex flex-nowrap gap-[2px]">
                    {choiceClass != 8 ? <button className='font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]' onClick={() => {changeValue(8); setChoiceClass(8)}}>8 класс</button> : <button className='font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>8 класс</button>}
                    {choiceClass != 9 ? <button className='font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]' onClick={() => {changeValue(9); setChoiceClass(9)}}>9 класс</button> : <button className='font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>9 класс</button>}
                    {choiceClass != 10 ? <button className='font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]' onClick={() => {changeValue(10); setChoiceClass(10)}}>10 класс</button> : <button className='font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>10 класс</button>}
                    {choiceClass != 11 ? <button className='font-serif font-normal px-[15px] py-[4px] bg-bright transition-colors duration-500 hover:bg-light-main text-xs max-[340px]:px-[10px]' onClick={() => {changeValue(11); setChoiceClass(11)}}>11 класс</button> : <button className='font-serif text-xs font-normal px-[15px] py-1 bg-light-main max-[340px]:px-[10px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>11 класс</button>}
                </div>
            )
        case 'medium' :
            return (
                <div className="rounded-[10px] overflow-hidden w-max flex gap-[2px]">
                    {choiceClass != 8 ? <button className='font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(8); setChoiceClass(8)}}>8 класс</button> : <button className='font-serif font-normal bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>8 класс</button>}
                    {choiceClass != 9 ? <button className='font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(9); setChoiceClass(9)}}>9 класс</button> : <button className='font-serif font-normal bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>9 класс</button>}
                    {choiceClass != 10 ? <button className='font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(10); setChoiceClass(10)}}>10 класс</button> : <button className='font-serif font-normal bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>10 класс</button>}
                    {choiceClass != 11 ? <button className='font-serif font-normal bg-bright transition-colors duration-500 hover:bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(11); setChoiceClass(11)}}>11 класс</button> : <button className='font-serif font-normal bg-light-main text-sm px-5 py-[6px]' onClick={() => {changeValue(0); setChoiceClass(0)}}>11 класс</button>}
                </div>
            )
    }
}

function ChoiceLevel ({displayWidth, changeValue}) {
    let [choiceLevel, setChoiceLevel] = useState(1);

    switch (displayWidth) {
        case 'large' :
            return (
                <div className="bg-gradient-to-r from-bright to-medium w-60 h-[30px] flex justify-around items-center rounded-full">
                    {choiceLevel != 1 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(1); setChoiceLevel(1)}}>1</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>1</button>}
                    {choiceLevel != 2 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(2); setChoiceLevel(2)}}>2</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>2</button>}
                    {choiceLevel != 3 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(3); setChoiceLevel(3)}}>3</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>3</button>}
                </div>
            )
        case 'little' :
            return (
                <div className="bg-gradient-to-r from-bright to-medium w-60 h-[30px] flex justify-around items-center rounded-full">
                    {choiceLevel != 1 ? <button className="font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0" onClick={() => {changeValue(1); setChoiceLevel(1)}}>1</button> : <button className="font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>1</button>}
                    {choiceLevel != 2 ? <button className="font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0" onClick={() => {changeValue(2); setChoiceLevel(2)}}>2</button> : <button className="font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>2</button>}
                    {choiceLevel != 3 ? <button className="font-serif rounded-full w-[60px] bg-transparent transition-all duration-300 h-[30px] py-0" onClick={() => {changeValue(3); setChoiceLevel(3)}}>3</button> : <button className="font-serif rounded-full w-full bg-light-main transition-all duration-300 h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>3</button>}
                </div>
            )
        case 'medium' :
            return (
                <div className="bg-gradient-to-r from-bright to-medium w-60 h-[30px] flex justify-around items-center rounded-full">
                    {choiceLevel != 1 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(1); setChoiceLevel(1)}}>1</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>1</button>}
                    {choiceLevel != 2 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(2); setChoiceLevel(2)}}>2</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>2</button>}
                    {choiceLevel != 3 ? <button className="font-serif rounded-full bg-transparent transition-colors duration-300 w-[60px] h-[30px] py-0" onClick={() => {changeValue(3); setChoiceLevel(3)}}>3</button> : <button className="font-serif rounded-full bg-light-main transition-colors duration-300 w-full h-[30px] py-1 px-1 " onClick={() => {changeValue(0); setChoiceLevel(0)}}>3</button>}
                </div>
            )
    }
}

function ChoiceTags ({displayWidth, changeValue}) {
    let [choiceTag, setChoiceTag] = useState(['расчёт']); 

    switch (displayWidth) {
        case 'large' :
            return (
                <ul className="w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll">
                    {tags.map(tag => <li key={tag.id}> {choiceTag.includes(tag.tagName) ? <button className="font-serif text-xl font-normal py-1 px-3 rounded-[10px] bg-light-main" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.filter((elem) => elem != tag.tagName))}}>{tag.tagName}</button> : <button className="font-serif text-xl font-normal py-1 px-3 rounded-[10px] bg-medium" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.concat(tag.tagName))}}>{tag.tagName}</button>}</li>)}
                </ul>
            )
        case 'little' :
            return (
                <ul className="w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll">
                    {tags.map(tag => <li key={tag.id}> {choiceTag.includes(tag.tagName) ? <button className="font-serif text-xs font-normal py-[3px] px-[10px] rounded-[10px] bg-light-main" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.filter((elem) => elem != tag.tagName))}}>{tag.tagName}</button> : <button className="font-serif text-xs font-normal py-[3px] px-[10px] rounded-[10px] bg-medium" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.concat(tag.tagName))}}>{tag.tagName}</button>}</li>)}
                </ul>
            )
        case 'medium' :
            return (
                <ul className="w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll">
                    {tags.map(tag => <li key={tag.id}> {choiceTag.includes(tag.tagName) ? <button className="font-serif text-sm font-normal py-[3px] px-2.5 rounded-[10px] bg-light-main" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.filter((elem) => elem != tag.tagName))}}>{tag.tagName}</button> : <button className="font-serif text-sm font-normal py-[3px] px-2.5 rounded-[10px] bg-medium" onClick={() => {changeValue(tag.tagName); setChoiceTag(choiceTag.concat(tag.tagName))}}>{tag.tagName}</button>}</li>)}
                </ul>
            )
    }
}

export default function ChoiceAndTasks(){
    let [criteria, setCriteria] = useState({class: 8, hardLevel: 1, tags: ['расчёт']});
    const [isWindow, setIsWindow] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (!isWindow) {
            setIsWindow(typeof window != 'undefined');
        }
    });

    if (!isWindow) return <></>

    let choiceTags = criteria.tags;
    let otherCriteria = {class: criteria.class, hardLevel: criteria.hardLevel};

    function makeChoiceTags(value){
        if (choiceTags.includes(value)){
            choiceTags = choiceTags.filter((elem) => elem != value);
        }else{
            choiceTags.push(value);
        }
        console.log(choiceTags);
    }

    function changeClass(value) {
        otherCriteria.class = value;
    }

    function changeLevel(value) {
        otherCriteria.hardLevel = value;
    }

    if (window.innerWidth > 1145) {
        return (
            <>
            <section id='choice-section' className="flex h-screen py-[100px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: `url(${path}SecondFon.png)`}}>
                <div className="wrapper mx-auto flex items-center px-0 max-[1280px]:px-5">
                <div className="w-[566px] flex flex-col gap-5">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите класс</p>
                <ChoiceClass displayWidth={'large'} changeValue={changeClass}/>
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите сложность (рекомендуем начинать с 1)</p>
                <ChoiceLevel displayWidth={'large'} changeValue={changeLevel}/>
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите интересующие теги</p>
                <ChoiceTags displayWidth={'large'} changeValue={makeChoiceTags}/>
                <Link href='/abouttags' className="font-serif text-xl font-normal text-bright">Подробнее про теги</Link>
                <button className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] py-2.5 bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 " onClick={() => {
                        setCriteria({class: otherCriteria.class, hardLevel: otherCriteria.hardLevel, tags: choiceTags});
                        document.getElementById('data-section').scrollIntoView({behavior: 'smooth'});
                    }}>Найти</button>
                </div>
                <div className="flex flex-col gap-7">
                <h4 className="font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] text-right">Стремись на <span className="text-bright">вершину Олимпа</span> с нами</h4>
                <p className="font-sans text-2xl/[25px] tracking-[0.02em] text-right">Чтобы получить задания выберите <span className="text-bright">класс</span> и <span className="text-bright">сложность</span>, а также укажите <span className="text-bright">теги</span>, которые вас <span className="bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold">интересуют</span></p>
                </div>
                </div>
                
            </section>
            <section id='data-section' className="wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-0 max-[1280px]:px-5" style={{backgroundImage: `url(${path}ThirdFon.png)`}}>
                {/* <input placeholder="Найти по ID" className="px-7 bg-transparent py-2.5 rounded-[10px] border-medium border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input> */}
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">По вашему запросу были найдены следующие задачи:</p>
                <TaskList _class={criteria.class} level={criteria.hardLevel} tags={criteria.tags}/>
            </section>
            </>
        )
    } else if (window.innerWidth < 683) {
        return (
            <>
            <section id='choice-section' className="flex h-screen py-[100px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: `url(${path}SecondFon.png)`}}>
                <div className="wrapper mx-auto flex flex-col px-0 max-[1280px]:px-5">
                    <div className="flex flex-col gap-7">
                        <h4 className="font-help text-lg/[1.3em] font-normal tracking-[0.04em]">Стремись на <span className="text-bright">вершину Олимпа</span> с нами</h4>
                        <p className="font-sans text-sm/[25px] tracking-[0.02em]">Чтобы получить задания выберите <span className="text-bright">класс</span> и <span className="text-bright">сложность</span>, а также укажите <span className="text-bright">теги</span>, которые вас <span className="bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold">интересуют</span></p>
                    </div>
                    <div className="w-full flex flex-col gap-5 max-[400px]:gap-2.5">
                        <p className="font-sans text-sm/[25px] tracking-[0.02em]">Выберите класс</p>
                        <ChoiceClass displayWidth={'little'} changeValue={changeClass}/>
                        <p className="font-sans text-sm/[25px] tracking-[0.02em]">Выберите сложность (рекомендуем начинать с 1)</p>
                        <ChoiceLevel displayWidth={'little'} changeValue={changeLevel}/>
                        <p className="font-sans text-sm/[25px] tracking-[0.02em]">Выберите интересующие теги</p>
                        <ChoiceTags displayWidth={'little'} changeValue={makeChoiceTags}/>
                        <Link href='/abouttags' className="font-serif text-xs font-normal text-bright">Подробнее про теги</Link>
                        <button className="font-sans text-sm/[25px] font-normal tracking-[0.02em] px-[15px] py-[6px] bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 " onClick={() => {
                                setCriteria({class: otherCriteria.class, hardLevel: otherCriteria.hardLevel, tags: choiceTags});
                                document.getElementById('data-section').scrollIntoView({behavior: 'smooth'});
                            }}>Найти</button>
                    </div>
                </div>
            </section>
            <section id='data-section' className="wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-0 max-[1280px]:px-5" style={{backgroundImage: `url(${path}ThirdFon.png)`}}>
                {/* <input placeholder="Найти по ID" className="px-7 bg-transparent py-2.5 rounded-[10px] border-medium border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input> */}
                <p className="font-sans text-sm/[25px] tracking-[0.02em]">По вашему запросу были найдены следующие задачи:</p>
                <TaskList _class={criteria.class} level={criteria.hardLevel} tags={criteria.tags}/>
            </section>
            </>
        )
    } else {
        return (
            <>
            <section id='choice-section' className="flex  py-[30px] items-center border-b-light-main border-b-[1px] bg-top bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: `url(${path}SecondFon.png)`}}>
                <div className="wrapper mx-auto flex items-center px-0 max-[1280px]:px-5">
                    <div className="flex flex-col gap-5 items-center">
                        <div className="flex flex-col gap-2.5 w-[588px]">
                            <h4 className="font-help font-normal tracking-[0.04em] text-center text-2xl/[1.3em]">Стремись на <span className="text-bright">вершину Олимпа</span> с нами</h4>
                            <p className="font-sans tracking-[0.02em] text-center text-lg/[25px]">Чтобы получить задания выберите <span className="text-bright">класс</span> и <span className="text-bright">сложность</span>, а также укажите <span className="text-bright">теги</span>, которые вас <span className="bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold">интересуют</span></p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="flex flex-col justify-between h-[285px]">
                                <div className="flex flex-col gap-y-2.5">
                                    <p className="font-sans tracking-[0.02em] text-lg/[25px]">Выберите класс</p>
                                    <ChoiceClass displayWidth={'medium'} changeValue={changeClass}/>
                                    <p className="font-sans tracking-[0.02em] text-lg/[25px]">Выберите сложность (рекомендуем начинать с 1)</p>
                                    <ChoiceLevel displayWidth={'medium'} changeValue={changeLevel}/>
                                </div>
                                <button className="font-sans text-lg/[25px] font-normal tracking-[0.02em] px-5 py-2 bg-bright rounded-[10px] w-max hover:bg-light-main transition-colors duration-500 justify-self-end" onClick={() => {
                                        setCriteria({class: otherCriteria.class, hardLevel: otherCriteria.hardLevel, tags: choiceTags});
                                        document.getElementById('data-section').scrollIntoView({behavior: 'smooth'});
                                    }}>Найти</button>
                            </div>
                            <div className="flex flex-col gap-y-2.5">
                                <p className="font-sans tracking-[0.02em] text-lg/[25px]">Выберите интересующие теги</p>
                                <ChoiceTags displayWidth={'medium'} changeValue={makeChoiceTags}/>
                                <Link href='/abouttags' className="font-serif text-sm font-normal text-bright">Подробнее про теги</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section id='data-section' className="wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat flex flex-col  gap-y-4 px-5" style={{backgroundImage: `url(${path}ThirdFon.png)`}}>
                {/* <input placeholder="Найти по ID" className="px-7 bg-transparent py-2.5 rounded-[10px] border-medium border-2 placeholder:font-serif palceholder:text-sm palceholder:font-normal"></input> */}
                <p className="font-sans text-lg/[25px] tracking-[0.02em]">По вашему запросу были найдены следующие задачи:</p>
                <TaskList _class={criteria.class} level={criteria.hardLevel} tags={criteria.tags}/>
            </section>
            </>
        )
    }
}