'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import defChoice from "./defaultChoice";
import { Text } from "./adminPanelCom";

let choice = defChoice();

function CreateTask(task, isDone){
    return (
        <li key={task._id} className={`${isDone ? 'bg-medium' : ''} flex justify-between px-[30px] max-[1146px]:px-5 py-2.5 border-medium border-2 items-center rounded-lg max-[840px]:flex-col max-[840px]:justify-normal max-[840px]:gap-4 max-[840px]:items-start max-sm:px-[15px]`}>
            <p className="font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px]">ID:  {task._id}</p>
            <div className="flex justify-between gap-4 items-center max-[840px]:flex-col max-[840px]:items-start">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] break-normal text-nowrap">класс: {task.class}</p>
                <p className="font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] text-nowrap">сложность: {task.level}</p>
                <p className="max-w-[500px] max-[1146px]:max-w-[350px] text-center max-[840px]:text-left font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] max-[340px]:break-all w-full hyphens-auto">теги: {task.tags.split('/').join(', ')}</p>
                <Link className='rounded-[10px] px-5 py-[5px] bg-bright font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px] max-sm:text-sm/[14px] max-sm:px-2.5' href={`/taskid/${task._id}/${task.class}/${task.level}/${task.tags.split('/').join(',').split(' ').join('_')}`}>Открыть</Link>
            </div>
        </li>
    )
}

export default function TaskList({_class, level, tags}){
    let [result, setResult] = useState(choice);
    let [doneTasks, setDoneTasks] = useState(null);

    useEffect(() => {
        async function getData() {
                try {
                    await fetch(`http://localhost:5000/?class=${_class}&level=${level}&tags=${tags.join(',')}`, {method: 'GET', cache: 'no-cache'})
                    .then(res => res.json())
                    .then(data => {
                        if (data.length != result.length) {
                            setResult(data);
                        } else if (data.length != 0 && result.length == data.length) {
                            let dif = false;
                            for (let i = 0; i < data.length; i++){
                                if (data[i]._id != result[i]._id) {
                                    dif = true;
                                    break;
                                }
                            }
                            if (dif){
                                setResult(data);
                            }
                        }
                    });
                    if (window.localStorage.getItem('userId') && window.localStorage.getItem('userId') != 'undefined' && doneTasks == null) {
                        await fetch(`http://localhost:5000/getdoneid?userid=${window.localStorage.getItem('userId')}`, {method: 'GET'})
                            .then(res => res.json())
                            .then(data => setDoneTasks(data.ids))
                    }
                }
                catch (err) {
                    console.error(err);
                }
        }
        getData();
    });
    return (
        <>
        {result.length == 0
            ?
            <Text>По вашему запросу ничего не было найдено</Text>
            :
            <ul className="flex flex-col gap-3 max-[840px]:grid max-[840px]:grid-cols-3 max-[730px]:grid-cols-2">
               {result.map(task => window.localStorage.getItem('userId') && window.localStorage.getItem('userId') && doneTasks != null ? CreateTask(task, typeof doneTasks.find(i => i == task._id) != 'undefined') : CreateTask(task, false))}
            </ul>
          }
        </>
    );
}