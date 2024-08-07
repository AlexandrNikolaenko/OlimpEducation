import Image from "next/image";
import { useState, useEffect } from "react";

export default function TaskImage ({id}){
    let [url, setUrl] = useState(null);

    useEffect(() => {
        async function getTask() {
            if (!url){
                
            }
        }
        getTask()
    })

    return (
        <div className="wrapper mx-auto rounded-[10px] border-medium border-2">
            <Image src={url} fill={true} />
        </div>
    ) 
}