import Link from "next/link";
import { useEffect, useState } from "react";
import defChoice from "./defaultChoice";

let choice = defChoice();

function CreateTask(task){
    return (
        <li key={task._id} className="flex justify-between px-[30px] py-2.5 border-medium border-2 items-center rounded-lg">
            <p>ID:  {task._id}</p>
            <div className="flex justify-between gap-2">
                <p>класс: {task.class}</p>
                <p>сложность: {task.level}</p>
                <p className="max-w-[500px]">теги: {task.tags.split('/').join(', ')}</p>
                <Link href={'/'}></Link>
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
        <ul className="flex flex-col gap-3">
            {result.map(task => CreateTask(task))}
        </ul>
    );
}