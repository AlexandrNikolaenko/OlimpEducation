'use client';

import { ControlAccUsers, ControlTasks } from "../components/adminPanelCom";
import { useEffect, useState } from "react";
import { host } from "../components/host";

export default function PersonalPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        async function getData () {
            if (isCheck || window.localStorage.getItem('userId') == 'udnefined') return;
            await fetch (`http://${host}:5000/checkrighs?userid=${window.localStorage.getItem('userId')}`, {method: 'GET'})
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(Boolean(data.isAdmin));
                    setIsCheck(true);
                })
                .catch((e) => console.log(e))
        }
        getData();
    })
    
    if (!isAdmin) {
        return(
            <div className="wrapper mx-auto pt-24">
                <h1>У вас нет доступа к этой странице</h1>
            </div>
        )
    } else {
        return (
            <div className="wrapper mx-auto min-h-screen pt-24 max-[1280px]:px-5">
                <h1 className="text-bright font-help text-3xl max-[834px]:text-2xl max-[380]:text-lg pb-10">Управление приложением</h1>
                <div className={'flex flex-col border-y-[1px] divide-y-[1px] divide-white'}>
                    <ControlAccUsers />
                    <ControlTasks />
                </div>
            </div>
        )
    }
}



// Работа с таблицей Users:

// Удаление пользователей
// Добавление пользователей
// Предоставление прав админа
// Выведение всей таблицы

// Работа с таблицей Answers:

// Добавление нового ответа
// Удаление ответа
// Редактирование ответа
// Выведение всей таблицы

// Работа с таблицей Tasks:

// Добавление нового задания
// Удаление задания
// Редактирование задания
// Выведение всей таблицы