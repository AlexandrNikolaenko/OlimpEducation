'use client'

import Link from "next/link";
import { DownloadTaskButton, DownloadAnswerButton, AsResolved } from "./Buttons";

export function InfoPart ({id, params, url}) {
    if (window.innerWidth > 700) {
        return (
            <div className="pt-[78px] flex justify-between">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">ID: {id}</p>
                <div className="flex justify-between gap-x-7">
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">класс: {params.taskid[1]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">сложность: {params.taskid[2]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">теги: {decodeURI(params.taskid[3]).split('%2C').join(', ').split('_').join(' ')}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="pt-[78px] flex justify-between items-end gap-x-5">
                <div className="flex flex-col gap-y-3.5">
                    <p className="font-sans text-sm/[18px] tracking-[0.02em]">ID: {id}</p>
                    <p className="font-sans text-sm/[18px] tracking-[0.02em]">класс: {params.taskid[1]}</p>
                    <p className="font-sans text-sm/[18px] tracking-[0.02em]">сложность: {params.taskid[2]}</p>
                    <p className="font-sans text-sm/[18px] tracking-[0.02em]">теги: {decodeURI(params.taskid[3]).split('%2C').join(', ').split('_').join(' ')}</p>
                </div>
                <div className="flex flex-col gap-y-3.5 items-end">
                    <Link href={'http://localhost:3000/'} className="bg-bright font-sans text-sm/[18px] tracking-[0.02em] px-5  max-[1146px]:px-3.5 py-[5px] max-[1146px]:py-[4px] border-bright border-2 rounded-[10px]">Закрыть</Link>
                    <DownloadTaskButton name={`${params.taskid[0]}.jpg`} url={url}/>
                </div>
            </div>
        )
    }
}

export function ButtonPart ({params, url, answerUrl}) {
    if (window.innerWidth > 700) {
        return (
            <div className="flex justify-between gap-x-5">
                <Link href={'http://localhost:3000/'} className="bg-bright font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] border-bright border-2 rounded-[10px]">Закрыть</Link>
                <DownloadTaskButton name={`${params.taskid[0]}.jpg`} url={url}/>
                <DownloadAnswerButton name={`Answer_${params.taskid[0]}.pdf`} url={answerUrl}/>
                <AsResolved taskId={params.taskid[0]} disable={false} isDone={false}/>
            </div>
        )
    } else {
        return (
            <div className="flex justify-between gap-5">
                <DownloadAnswerButton name={`Answer_${params.taskid[0]}.pdf`} url={answerUrl}/>
                <AsResolved taskId={params.taskid[0]} disable={false} isDone={false}/>
            </div>
        )
    }
}