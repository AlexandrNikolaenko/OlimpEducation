'use client'

import { useState } from "react"



export default function Login ({close}){
    const [isRegUser, setIsRegUser] = useState(true);
    const [regErr, setRegErr] = useState(false);
    const [isCorrectPass, setIsCorrectPass] = useState(true);

    function sendFormData (url, method, formData) {
        let json = JSON.stringify(formData);
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: json
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.name != '' && data.name != null) {
                setRegErr(false);
                close(data.name, data.userId);
            } else {
                setRegErr(true);
            }
        })
        .catch((err) => {
            alert('Ошибка регистрации');
            console.log(err);
        })
    }

    if (isRegUser) {
        return (
            <div className="h-screen fixed w-full bg-main/70 backdrop-blur-xl pt-52 wrapper mx-auto px-5">
                <div className=" mx-auto max-w-[511px] p-7 max-[1146px]:p-5 max-[640px]:2.5 rounded-[10px] border-super-light border-2">
                    <p className="pb-5 text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[640px]:text-base/[18px] tracking-[0.02em]">Вход в систему</p>
                    {regErr ? <p className="text-red-600 pb-5 text-lg/[25px] max-[1146px]:text-base/[25px] max-[640px]:text-xs/[18px]">Неверно указан логин или пароль</p> : <></>}
                    <form className="flex flex-col gap-y-5" id={'login-form'} onSubmit={function (e)  {
                        e.preventDefault();
                        let formData = new FormData(document.getElementById('login-form'));
                        formData = Object.fromEntries(formData);
                        sendFormData('http://localhost:5000/login', 'POST', formData)
                        }}>
                        <input placeholder="Логин" name="login" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl max-[1146px]:placeholder:text-base max-[640px]:placeholder:text-sm palceholder:font-normal"></input>
                        <input placeholder="Пароль" name="password" type='password' className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <div className="flex flex-nowrap flex-row max-[360px]:flex-col justify-center gap-5 max-[640px]:gap-3 items-center">
                            <button type="submit" className="px-5 max-[1146px]:px-3.5 py-2.5 max-[1146px]:py-[6px] rounded-[10px] font-serif text-xl max-[1146px]:text-base max-[640px]:text-sm bg-medium w-auto max-[360px]:w-full">Войти</button>
                            <button onClick={(act) => {act.preventDefault(); setIsRegUser(false); setRegErr(false)}} className={'px-5 max-[1146px]:px-3.5 py-2.5 max-[1146px]:py-[6px] rounded-[10px] font-serif text-xl max-[1146px]:text-base max-[640px]:text-sm bg-bright w-auto max-[360px]:w-full'}>Зарегистрироваться</button>
                        </div>
                    </form>
                </div>  
            </div>
        )
    } else {
        return (
            <div className="h-screen fixed w-full bg-main/70 backdrop-blur-xl pt-52 px-5">
                <div className="mx-auto max-w-[511px] p-7 max-[1146px]:p-5 max-[640px]:2.5 rounded-[10px] border-super-light border-2">
                    <p className="pb-5 text-2xl/[25px] max-[1146px]:text-lg/[25px] max-[640px]:text-sm/[18px] tracking-[0.02em]">Регистрация в системе</p>
                    {regErr ? <p className="text-red-600 pb-5 text-lg/[25px] max-[1146px]:text-base/[25px] max-[640px]:text-xs/[18px]">Этот адрес электронной почты уже зарегистрирован</p> : <></>}
                    <form className="flex flex-col gap-y-5 signup-form" id={'sign-up-form'} onSubmit={function (e) {
                        e.preventDefault();
                        let formData = new FormData(document.getElementById('sign-up-form'));
                        formData = Object.fromEntries(formData);
                        if (formData.password != formData.repassword) setIsCorrectPass(false);
                        else {
                            sendFormData('http://localhost:5000/signup', 'POST', formData);
                            setIsCorrectPass(true);
                        }
                        
                    }}>
                        <input placeholder="Никнейм" name="name" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Логин" name="login" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Email" name="email" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        {isCorrectPass ? <></> : <p className="text-red-600 text-lg/[25px] max-[1146px]:text-base/[25px] max-[640px]:text-xs/[18px]">Введенный и повторенный пароли не совпадают</p>}
                        <input placeholder="Пароль" name="password" type='password' className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Повторите пароль" name="repassword" type="password" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <div className="flex flex-nowrap flex-row max-[360px]:flex-col justify-center gap-5 max-[640px]:gap-3 items-center">
                            <button onClick={(act) => {act.preventDefault(); setIsRegUser(true); setRegErr(false)}} className="px-5 max-[1146px]:px-3.5 py-2.5 max-[1146px]:py-[6px] rounded-[10px] font-serif text-xl max-[1146px]:text-base max-[640px]:text-sm bg-medium max-[360px]:w-full">Войти</button>
                            <button type='submit' className={'px-5 max-[1146px]:px-3.5 py-2.5 max-[1146px]:py-[6px] rounded-[10px] font-serif text-xl max-[1146px]:text-base max-[640px]:text-sm bg-bright max-[360px]:w-full'}>Зарегистрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }    
}