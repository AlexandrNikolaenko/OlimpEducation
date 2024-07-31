'use client'

import Link from "next/link";
import { useState } from "react";

const tags = [{id: 1, tagName: 'расчёт'}, {id: 2, tagName: 'строение'}, {id: 3, tagName: 'кристаллохимия'},{id: 4, tagName: 'практика'} , {id: 5, tagName: 'массовые доли'}, {id: 6, tagName: 'кроссворд'}, {id: 7, tagName: 'галогены неорганические реакции'}, {id: 8, tagName: 'цепочки'}, {id: 9, tagName: 'халькогены'}, {id: 10, tagName: 'халькогены2'}, {id: 11, tagName: '5 группа'}, {id: 12, tagName: '5 группа2'}, {id: 13, tagName: '4 группа'}, {id: 14, tagName: '4 группа2'}, {id: 15, tagName: '3 группа'}, {id: 16, tagName: '3 группа2'}, {id: 17, tagName: '2 группа'}, {id: 18, tagName: '1 группа'}, {id: 19, tagName: 'побочные группы'} , {id: 20, tagName: 'побочные группы2'}, {id: 21, tagName:'побочные группы3'}, {id: 22, tagName:'лантаноиды'}, {id: 23, tagName: 'актиноиды'}, {id: 24, tagName: 'd-металлы'}, {id: 25, tagName: 'd-металлы2'}, {id: 26, tagName: 'd-металлы3'}, {id: 27, tagName: 'd-металлы4'}, {id: 28, tagName: 'алканы'}, {id: 29, tagName: 'алкены'}, {id: 30, tagName: 'алкины'}, {id: 31, tagName: 'алкодиены'}, {id: 32, tagName: 'ароматика'}, {id: 33, tagName: 'спирты'}, {id: 34, tagName: 'карбоновые кислоты'}, {id: 35, tagName: 'эфиры'}, {id: 36, tagName: 'азотсодержащие соединения'}];
let choiceTags = [];

function makeChoiceTags(value){
    if (choiceTags.includes(value)){
        choiceTags = choiceTags.filter((elem) => elem != value);
    }else{
        choiceTags.push(value);
    }
    console.log(choiceTags);
}

export default function ChoiceAndTasks(){
    const [criteria, setCriteria] = useState({class: null, hardLevel: null, tags: []});

    return (
        <>
        <section className="flex h-screen py-[100px] items-center border-b-light-main border-b-[1px] bg-bottom bg-no-repeat bg-cover" style={{backgroundImage: 'url(SecondFon.png)'}}>
            <div className="wrapper mx-auto flex items-center">
            <div className="w-[566px] flex flex-col gap-5">
            <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите класс</p>
            <div className="rounded-[10px] overflow-hidden w-max flex gap-[2px]">
                <button className="font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main  active:bg-light-main focus:bg-light-main" value={8}>8 класс</button>
                <button className="font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main  active:bg-light-main focus:bg-light-main" value={9}>9 класс</button>
                <button className="font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main  active:bg-light-main focus:bg-light-main" value={10}>10 класс</button>
                <button className="font-serif text-xl font-normal px-[30px] py-2 bg-bright transition-colors duration-500 hover:bg-light-main  active:bg-light-main focus:bg-light-main" value={11}>11 класс</button>
            </div>
            <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите сложность</p>
            <p className="font-sans text-2xl/[25px] tracking-[0.02em]">Выберите интересующие теги</p>
            <ul className="w-full flex flex-wrap gap-2 h-[245px] overflow-y-scroll">
                {tags.map(tag => <li key={tag.id}><button className="font-serif text-xl font-normal py-1 px-3 rounded-[10px] bg-medium" onClick={() => makeChoiceTags(tag.tagName)}>{tag.tagName}</button></li>)}
            </ul>
            <Link href='/' className="font-serif text-xl font-normal text-bright">Подробнее про теги</Link>
            <button className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] py-2.5 bg-bright rounded-[10px] w-max hover:bg-light-main focus:bg-light-main transition-colors duration-500 " onClick={() => setCriteria({class: null, hardLevel: null, tags: choiceTags})}>Найти</button>
            </div>
            <div className="flex flex-col gap-7">
            <h4 className="font-help text-[32px]/[1.3em] font-normal tracking-[0.04em] text-right">Стремись на <span className="text-bright">вершину Олимпа</span> с нами</h4>
            <p className="font-sans text-2xl/[25px] tracking-[0.02em] text-right">Чтобы получить задания выберите <span className="text-bright">класс</span> и <span className="text-bright">сложность</span>, а также укажите <span className="text-bright">теги</span>, которые вас <span className="bg-gradient-to-r from-bright to-medium bg-clip-text text-transparent font-bold">интересуют</span></p>
            </div>
            </div>
            
        </section>
        <section className="wrapper mx-auto py-[60px] bg-local min-h-screen bg-center bg-no-repeat" style={{backgroundImage: 'url(ThirdFon.png)'}}>
            <input placeholder="Найти по ID" className="px-7 py-2.5 bg-transparent rounded-[10px] border-medium border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal mb-5"></input>
            <p className="font-sans text-2xl/[25px] tracking-[0.02em]">По вашему запросу были найдены следующие задачи:</p>
        </section>
        </>
    )
}