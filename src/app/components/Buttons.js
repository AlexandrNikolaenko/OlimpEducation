'use client'

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
    return <button className="font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] border-bright border-2 rounded-[10px]" onClick={() => downloadFile(name, url)}>Скачать задачу</button>
}

export function DownloadAnswerButton({name, url}) {
    return <button className="font-sans text-2xl/[25px] tracking-[0.02em] px-5 py-[5px] bg-bright rounded-[10px]" onClick={() => downloadFile(name, url)}>Скачать решение</button>
}
