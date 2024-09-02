'use client'

import { useState } from "react"



export default function Login ({close}){
    const [isRegUser, setIsRegUser] = useState(true);

    function sendFormData (url, method, formData) {
        console.log(formData);
        fetch(url, {
            method: method,
            headers: {
                "Content-Type": "json"
            },
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    if (isRegUser) {
        return (
            <div className="h-screen fixed w-full bg-main/70 backdrop-blur-xl pt-52">
                <div className=" mx-auto max-w-[511px] p-7 rounded-[10px] border-super-light border-2">
                    <p className="pb-5 text-2xl/[25px] tracking-[0.02em]">Вход в систему</p>
                    <form className="flex flex-col gap-y-5" id={'login-form'} onSubmit={function (e)  {
                        e.preventDefault();
                        let formData = new FormData(document.getElementById('login-form'));
                        formData = Object.fromEntries(formData);
                        console.log(formData);
                        sendFormData('http://localhost:5000/login', 'POST', formData)
                        }}>
                        <input placeholder="Логин" name="login" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Пароль" name="password" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <div className="flex flex-nowrap justify-center gap-5 items-center">
                            <button type="submit" className="px-5 py-2.5 rounded-[10px] font-serif text-xl bg-medium">Войти</button>
                            <button onClick={(act) => {act.preventDefault(); setIsRegUser(false)}} className={'px-5 py-2.5 rounded-[10px] font-serif text-xl bg-bright'}>Зарегистрироваться</button>
                        </div>
                    </form>
                </div>  
            </div>
        )
    } else {
        return (
            <div className="h-screen fixed w-full bg-main/70 backdrop-blur-xl pt-52">
                <div className="mx-auto max-w-[511px] p-7 rounded-[10px] border-super-light border-2">
                    <p className="pb-5 text-2xl/[25px] tracking-[0.02em]">Регистрация в системе</p>
                    <form className="flex flex-col gap-y-5 signup-form" action="http://localhost:5000/login" method="post">
                        <input placeholder="Никнейм" name="name" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Логин" name="login" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Email" name="email" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Пароль" name="password" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <input placeholder="Повторите пароль" name="repassword" className="px-7 bg-transparent py-2.5 rounded-[10px] border-super-light border-2 placeholder:font-serif palceholder:text-xl palceholder:font-normal"></input>
                        <div className="flex flex-nowrap justify-center gap-5 items-center">
                            <button onClick={(act) => {act.preventDefault(); setIsRegUser(true)}} className="px-5 py-2.5 rounded-[10px] font-serif text-xl bg-medium">Войти</button>
                            <button type='submit' className={'px-5 py-2.5 rounded-[10px] font-serif text-xl bg-bright'}>Зарегистрироваться</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }    
}