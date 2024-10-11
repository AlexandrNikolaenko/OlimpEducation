'use client'

import { useState } from "react";
import Image from "next/image";
import { SubmitButton } from "../components/Buttons";
import { host } from "../components/host";

export function ControlAccUsers() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-5 flex flex-col gap-y-5 justify-center'>
            <div className='flex justify-between items-center'>
                <p>Управление аккаунтами пользователей</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex-col gap-y-2.5 px-7 ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} transition-all duration-200`}>
                <AddUser />
                <RemoveUser />
                <TakeAdminRights />
                <ShowAllUsers />
            </div>
        </div>
    )
}

function AddUser () {
    const [isOpen, setIsOpen] = useState(false);

    function sendFormData (url, formData) {
        let json = JSON.stringify(formData);
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: json
        })
        .then((res) => res.json())
        .then((data) => { 
            if (data.name == '' || data.name == null) alert('Пользователь с таким email уже существует')
            else alert('Пользователь упешно зарегистрирован')
        })
        .catch((err) => {
            alert('Ошибка регистрации');
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <p>Добавить пользователя</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'add-user-form'} onSubmit={function (e)  {
                    e.preventDefault();
                    let formData = new FormData(document.getElementById('add-user-form'));
                    formData = Object.fromEntries(formData);
                    sendFormData(`http://${host}:5000/signup`, formData)
                }}>
                <div className='w-full grid grid-cols-3 gap-x-5 items-center'>
                    <input placeholder={'Name'} name={'name'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                    <input placeholder={'Email'} name={'email'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                    <input placeholder={'Password'} name={'password'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                </div>
                <SubmitButton color={'bright'} text={'Зарегистрироваться'}/>
            </form>
        </div>
    )
}

function RemoveUser () {
    const [isOpen, setIsOpen] = useState(false);

    function sendFormData (url, formData) {
        let json = JSON.stringify(formData);
        fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: json,
            cache: 'no-cache'
        })
        .then((res) => res.json())
        .then((data) => { 
            if (data.res == 'success'){
                alert('Пользователь успешно удален')
            } else {
                alert('Такого пользователя не существует')
            }
        })
        .catch((err) => {
            alert('Ошибка запроса');
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <p>Удалить пользователя</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'remove-user-form'} onSubmit={function (e)  {
                    e.preventDefault();
                    console.log(e.nativeEvent.submitter.type);
                    let formData = new FormData(document.getElementById('remove-user-form'));
                    formData = Object.fromEntries(formData);
                    sendFormData(`http://${host}:5000/removeuser`, formData)
                }}>
                <div className='w-full flex gap-x-5 items-center max-w-[752.33px]'>
                    <input placeholder={'User ID'} name={'userid'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                    <span className='w-fit'>or</span>
                    <input placeholder={'Email'} name={'email'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                </div>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
        </div>
    )
}

function TakeAdminRights () {
    const [isOpen, setIsOpen] = useState(false);

    function sendFormData (url, formData) {
        let json = JSON.stringify(formData);
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: json,
            cache: 'no-cache'
        })
        .then((res) => res.json())
        .then((data) => { 
            if (data.res == 'success'){
                alert('Запрос выполнен успешно')
            } else {
                alert('Запрос не выполнен')
            }
        })
        .catch((err) => {
            alert('Ошибка запроса');
            console.log(err);
        })
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <p>Предоставление прав админа</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'admin-user-form'} onSubmit={function (e)  {
                    e.preventDefault();
                    let formData = new FormData(document.getElementById('admin-user-form'));
                    formData = Object.fromEntries(formData);
                    console.log(e.nativeEvent.submitter)
                    if (e.nativeEvent.submitter.id == 'take') {
                        sendFormData(`http://${host}:5000/takerights`, formData);
                    } else {
                        sendFormData(`http://${host}:5000/recallrights`, formData);
                    }
                    
                }}>
                <div className='w-full flex gap-x-5 items-center max-w-[752.33px]'>
                    <input placeholder={'User ID'} name={'userid'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                    <span className='w-fit'>or</span>
                    <input placeholder={'Email'} name={'email'} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
                </div>
                <div className="flex gap-x-5">
                    <SubmitButton color={'bright'} id={'take'} text={'Предоставить'}/>
                    <SubmitButton color={'medium'} id={'recall'} text={'Отозвать'}/>
                </div>
            </form>
        </div>
    )
}

function ShowAllUsers () {
    const [isOpen, setIsOpen] = useState(false)
    const [tableData, setTableData] = useState([]);

    async function showData () {
        await fetch(`http://${host}:5000/getusers`, {method: 'GET'})
            .then(res => res.json())
            .then(data => setTableData(data));
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <button className='w-full text-left' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать всех пользователей</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'}`}>
                <li className="grid grid-cols-6 py-3">
                    <p className="justify-self-center">userId</p>
                    <p className="justify-self-center">isAdmin</p>
                    <p className="justify-self-center">donetask_ids</p>
                    <p className="justify-self-center">name</p>
                    <p className="justify-self-center">password</p>
                    <p className="justify-self-center">email</p>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-6 py-3 items-center" key={row.userId}>
                            <p className="justify-self-center overflow-hidden">{row.userId}</p>
                            <p className="justify-self-center overflow-hidden">{`${row.isAdmin == '1'}`}</p>
                            <p className="justify-self-center overflow-hidden">{row.donetask_ids}</p>
                            <p className="justify-self-center overflow-hidden">{row.name}</p>
                            <p className="justify-self-center overflow-hidden">{row.password}</p>
                            <p className="justify-self-center overflow-hidden">{row.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export function ControlTasks() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Управление базой заданий</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
                <ControlTableTask />
                <ControlTableAnswers />
            </div>
        </div>
    )
}

function ControlTableTask () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Управление таблицой заданий</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
                <AddTask />
                <RemoveTask />
                <EditTask />
                <ShowAllTask />
            </div>
        </div>
    )
}

function AddTask() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Добавить задание</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}
function RemoveTask() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Удалить задание</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}

function EditTask() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Редактиовать задание</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}

function ShowAllTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    
    async function showData () {
        await fetch(`http://${host}:5000/gettasks`, {method: 'GET'})
            .then(res => res.json())
            .then(data => setTableData(data));
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <button className='w-full text-left' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать все задания</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'}`}>
                <li className="grid grid-cols-5 py-3">
                    <p className="justify-self-center">id</p>
                    <p className="justify-self-center">_id</p>
                    <p className="justify-self-center">class</p>
                    <p className="justify-self-center">level</p>
                    <p className="justify-self-center">tags</p>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-5 py-3 items-center" key={row._id}>
                            <p className="justify-self-center">{row.id}</p>
                            <p className="justify-self-center">{row._id}</p>
                            <p className="justify-self-center">{row.class}</p>
                            <p className="justify-self-center">{row.level}</p>
                            <p className="justify-self-center">{row.tags}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function ControlTableAnswers () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Управление таблицой ответов</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
                <AddAnswer />
                <RemoveAnswer />
                <EditAnswer />
                <ShowAllAnswers />
            </div>
        </div>
    )
}

function AddAnswer() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Добавить ответ</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}
function RemoveAnswer() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Удалить ответ</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}

function EditAnswer() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='py-5'>
            <div className='flex justify-between items-center'>
                <p>Редактиовать ответ</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col`}>
            </div>
        </div>
    )
}

function ShowAllAnswers() {
    const [isOpen, setIsOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    
    async function showData () {
        await fetch(`http://${host}:5000/getanswers`, {method: 'GET'})
            .then(res => res.json())
            .then(data => setTableData(data));
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <button className='w-full text-left' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать все ответы</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'}`}>
                <li className="grid grid-cols-2 py-3">
                    <p className="justify-self-center">id</p>
                    <p className="justify-self-center">nameFile</p>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-2 py-3 items-center" key={row.id}>
                            <p className="justify-self-center">{row.id}</p>
                            <p className="justify-self-center">{row.nameFile}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}