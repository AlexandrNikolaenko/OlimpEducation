'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export function TaskImage ({id}){
    let [url, setUrl] = useState('https://disk.yandex.ru/');

    useEffect(() => {
        async function getTask() {
            if (url == 'https://disk.yandex.ru/'){
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
        <div className="wrapper mx-auto rounded-[10px] border-medium border-2 p-9"  style={{backgroundImage: `url(${url})`}} >
            {/* <img src={url} alt={'Здесь должно быть задание но что-то пошло не так:('}/> */}
            {/* <Image src={'/Mi.jpg'} width={1024} height={100} alt={'Здесь должно быть задание но что-то пошло не так:('}/> */}
            <Link href={url} download={true}>Ссылка на задание</Link>
        </div>
    ) 
}