'use client';

import { useState } from "react";

export default function PersonalPage() {
    const [isAdmin, setIsAdmin] = useState(false)
    if (!isAdmin) {
        return(
            <div className="wrapper mx-auto">
                <h1>У вас нет доступа к этой странице</h1>
            </div>
        )
    } else {
        return (
            <div className="wrapper mx-auto">
                <h1>Управление приложением</h1>
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