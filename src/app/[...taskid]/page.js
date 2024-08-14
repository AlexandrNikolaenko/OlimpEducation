import { TaskImage } from "../components/taskImage"
import Link from "next/link"

export default function Page({params}){


    return (
        <div className="wrapper mx-auto flex flex-col gap-y-[30px] max-[1280px]:px-5">
            <div className="pt-[78px] flex justify-between">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">ID: {params.taskid[0]}</p>
                <div className="flex justify-between gap-x-7">
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">класс: {params.taskid[1]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">сложность: {params.taskid[2]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">теги: {decodeURI(params.taskid[3]).split('%2C').join(', ').split('_').join(' ')}</p>
                </div>
            </div>
            <TaskImage id={params.taskid[0]} />
            <div className="flex justify-between">
                <Link href={'/'} className="bg-bright font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] border-bright border-2 rounded-[10px]">Закрыть</Link>
                <button className="font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] border-bright border-2 rounded-[10px]">Скачать задачу</button>
                <button className="font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] bg-bright rounded-[10px]">Скачать решение</button>
                <button className="font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] bg-medium rounded-[10px]">Скачать решение</button>
            </div>
        </div>
    )
}