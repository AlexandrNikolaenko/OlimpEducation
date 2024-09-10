'use server'

import { TaskImage } from "../components/taskImage";
import { InfoPart, ButtonPart } from "../components/infoParts";

export default async function Page({params}) {
    let url, answerUrl;
    let id = params.taskid[0];

    await fetch(`http://localhost:5000/answer?id=${id}`, {method: 'GET'})
            .then(res => res.json()).then(data => answerUrl = data.url);

    await fetch(`http://localhost:5000/task?id=${id}`, {method: 'GET'})
            .then(res => res.json())
            .then(data => url = data.url);

    return (
        <div className="wrapper mx-auto flex flex-col gap-y-[30px] max-[700px]:gap-y-5 px-0 max-[1280px]:px-5">
            <InfoPart id={id} params={params} url={url}/>
            <TaskImage url={url} />
            <ButtonPart params={params} url={url} answerUrl={answerUrl}/>
        </div>
    )
}