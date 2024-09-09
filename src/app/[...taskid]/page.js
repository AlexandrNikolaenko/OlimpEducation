'use server'

import { TaskImage } from "../components/taskImage"
import Link from "next/link"
import { DownloadTaskButton, DownloadAnswerButton } from "../components/Buttons";
import { AsResolved } from "../components/Buttons";

export default async function Page({params}){
    let url, answerUrl;
    let id = params.taskid[0];

    await fetch(`http://localhost:5000/answer?id=${id}`, {method: 'GET'})
            .then(res => res.json()).then(data => answerUrl = data.url);

    await fetch(`http://localhost:5000/task?id=${id}`, {method: 'GET'})
            .then(res => res.json())
            .then(data => url = data.url);

    return (
        <div className="wrapper mx-auto flex flex-col gap-y-[30px] max-[1280px]:px-5">
            <div className="pt-[78px] flex justify-between">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">ID: {id}</p>
                <div className="flex justify-between gap-x-7">
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">класс: {params.taskid[1]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">сложность: {params.taskid[2]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">теги: {decodeURI(params.taskid[3]).split('%2C').join(', ').split('_').join(' ')}</p>
                </div>
            </div>
            <TaskImage url={url} />
            <div className="flex justify-between">
                <Link href={'http://localhost:3000/'} className="bg-bright font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] border-bright border-2 rounded-[10px]">Закрыть</Link>
                <DownloadTaskButton name={`${params.taskid[0]}.jpg`} url={url}/>
                <DownloadAnswerButton name={`Answer_${params.taskid[0]}.pdf`} url={answerUrl}/>
                <AsResolved taskId={params.taskid[0]} disable={false} isDone={false}/>
            </div>
        </div>
    )
}