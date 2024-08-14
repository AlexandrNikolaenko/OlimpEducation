import Link from "next/link";
import { useEffect, useState } from "react";
import defChoice from "./defaultChoice";

let choice = defChoice();

function CreateTask(task){
    return (
        <li key={task._id} className="flex justify-between px-[30px] max-[1146px]:px-5 py-2.5 border-medium border-2 items-center rounded-lg max-[840px]:flex-col max-[840px]:justify-normal max-[840px]:gap-4 max-[840px]:items-start">
            <p className="font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px]">ID:  {task._id}</p>
            <div className="flex justify-between gap-4 items-center max-[840px]:flex-col max-[840px]:items-start">
                <p>класс: {task.class}</p>
                <p>сложность: {task.level}</p>
                <p className="max-w-[500px] max-[1146px]:max-w-[350px] text-center max-[840px]:text-left">теги: {task.tags.split('/').join(', ')}</p>
                <Link className='rounded-[10px] px-5 py-[5px] bg-bright font-sans text-2xl/[25px] tracking-[0.02em] max-[1146px]:text-lg/[25px]' href={`/${task.id}/${task.class}/${task.level}/${task.tags.split('/').join(',').split(' ').join('_')}`}>Открыть</Link>
            </div>
        </li>
    )
}

export default function TaskList({_class, level, tags}){
    let [result, setResult] = useState(choice);

    useEffect(() => {
        async function getData() {
            
                try {
                    await fetch(`http://localhost:5000/?class=${_class}&level=${level}&tags=${tags.join(',')}`, {method: 'GET'})
                    .then(res => res.json())
                    .then(data => {
                        if (data[0] && data.length == result.length){
                            let dif = false;
                            for (let i = 0; i < data.length; i++){
                                if (data[i]._id != data[i]._id) {
                                    console.log(data[i]._id != data[i]._ig);
                                    dif = true;
                                    break;
                                }
                            }
                            if (dif){
                                setResult(data);
                            }
                        }else if (data[0] && data.length != result.length){
                            setResult(data);
                        }
                    })
                }
                catch (err) {
                    console.error(err);
                }
            
        }
        getData();
    });
    return (
        <ul className="flex flex-col gap-3 max-[840px]:grid max-[840px]:grid-cols-3 max-[730px]:grid-cols-2">
            {result.map(task => CreateTask(task))}
        </ul>
    );
}