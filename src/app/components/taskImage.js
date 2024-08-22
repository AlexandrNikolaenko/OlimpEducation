'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export function TaskImage ({id}){
    let [url, setUrl] = useState('/asd.jpg');

    useEffect(() => {
        async function getTask() {
            if (url == '/asd.jpg'){
                await fetch(`http://localhost:5000/task?id=${id}`, {method: 'GET'})
                .then(res => res.json())
                .then((data) => {
                    console.log('Url is getting');
                    console.log(data.url);
                    setUrl(data.url)
                })
            }
        }
        getTask()
    })

    console.log(url);

    return (
        <div className="wrapper mx-auto w-full rounded-[10px] border-medium border-2 overflow-hidden" >
            <img src={url} className={'w-full'} alt={'Здесь должно быть задание но что-то пошло не так:('}/>
            {/* <Image src={url} width={1240} height={100} alt={'Здесь должно быть задание но что-то пошло не так:('}/> */}
            {/* <Link href={url} download={true}>Ссылка на задание</Link> */}
        </div>
    ) 
}