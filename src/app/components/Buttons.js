'use client'

import { useState, useEffect } from "react";

function downloadFile(fileName, url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a); 
    a.click();
    document.body.removeChild(a); 
}

export function ScrollButton({id, text}){
    return <button className={`font-sans ${window.innerWidth > 683 ? 'text-2xl/[25px] max-[1146px]:text-lg/[25px] px-[30px] max-[1146px]:px-5 py-2.5 max-[1146px]:py-2' : 'text-sm/[18px] px-[15px] py-[6px]'}  font-normal tracking-[0.02em] bg-bright hover:bg-light-main transition-colors duration-500 rounded-[10px]`} onClick={() => {document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center'})}}>{text}</button>
}

export function DownloadTaskButton({name, url}) {
    return <button className="font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5  max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] border-bright border-2 rounded-[10px]" onClick={() => downloadFile(name, url)}>Скачать задачу</button>
}

export function DownloadAnswerButton({name, url}) {
    return <button className="font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5  max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-bright rounded-[10px]" onClick={() => downloadFile(name, url)}>Скачать решение</button>
}

export function AsResolved({taskId, isDone}) {
    const [isMark, setIsMark] = useState(isDone);

    useEffect(() => {
        async function getIsDone() {
            if (window.localStorage.getItem('userId') && window.localStorage.getItem('userId') != 'undefined'){
                await fetch(`http://localhost:5000/getdoneid?userid=${window.localStorage.getItem('userId')}`, {method: 'GET'})
                        .then(res => res.json())
                        .then(data => {if (isMark != (typeof data.ids.find(i => i == taskId) != 'undefined')) setIsMark(typeof data.ids.find(i => i == taskId) != 'undefined')})
            }
        }
        getIsDone();
    });

    function addtask () {
        fetch(`http://localhost:5000/addtask`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                id: taskId,
                userId: window.localStorage.getItem('userId')
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.res);
            if (data.res == 'success') setIsMark(true);
            })
    }

    function removeTask() {
        fetch('http://localhost:5000/removetask', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                id: taskId,
                userId: window.localStorage.getItem('userId')
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.res);
            if (data.res == 'success') setIsMark(false);
            })
    }

    if (window.localStorage.getItem('userId') && window.localStorage.getItem('userId') != 'undefined') {
        if (isMark) {
            return <button className="font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]" onClick={removeTask}>Отметить нерешенным</button>
        } else {
            return <button className="font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]" onClick={addtask}>Отметить решенным</button>
        }
    } else {
        return <button className="font-sans text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[700px]:text-sm/[18px] tracking-[0.02em] px-5 max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] bg-medium rounded-[10px]" onClick={() => alert('Необходимо войти в систему')}>Отметить решенным</button>
    }
}

export function SubmitButton ({color, text, id}) {

    return (
        <>
            {id ? <button type={'submit'} className={`py-2.5 px-5 rounded-[10px] bg-${color}`} id={id}>{text}</button> : <button type={'submit'} className={`py-2.5 px-5 rounded-[10px] bg-${color}`}>{text}</button>}
        </>
    )
}