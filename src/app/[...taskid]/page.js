// import TaskImage from "../components/taskImage"
import Link from "next/link"

export default function Page({params}){


    return (
        <div className="wrapper mx-auto">
            <div className="pt-[78px] flex justify-between">
                <p className="font-sans text-2xl/[25px] tracking-[0.02em]">ID: {params.taskid[0]}</p>
                <div className="flex justify-between gap-x-7">
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">класс: {params.taskid[1]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">сложность: {params.taskid[2]}</p>
                    <p className="font-sans text-2xl/[25px] tracking-[0.02em]">теги: {decodeURI(params.taskid[3]).split('%2C').join(', ').split('_').join(' ')}</p>
                </div>
            </div>
            {/* <TaskImage id={params.taskid[0]} /> */}
            <div>
                <Link href={'/'} className="bg-bright p-3"/>
            </div>
        </div>
    )
}