'use client'

import { useState, useRef } from "react";
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

function dataProc(url, successMessage, noSuccessMessage, errMessage, event, id, method, isFile=false) {
    event.preventDefault();
    let formData = new FormData(document.getElementById(id));
    let relFormData = formData;
    formData = Object.fromEntries(formData);
    sendFormData(`http://${host}:5000/${url}`, formData, successMessage, noSuccessMessage, errMessage, method, isFile, relFormData);
}

function sendFormData (url, formData, successMessage, noSuccessMessage, errMessage, method, isFile, relFormData) {
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
        if (data.res == 'success') alert(successMessage)
        else alert(noSuccessMessage)
    })
    .catch((err) => {
        alert(errMessage);
        console.log(err);
    });
    console.log(URL.createObjectURL(formData.file));
    if (isFile) {
        fetch(`${url}file`, {
            method: method,
            body: relFormData
        })
        .then((res) => res.json())
        .then((data) => { 
            if (data.res == 'success') alert(successMessage)
            else alert(noSuccessMessage)
        })
        .catch((err) => {
            alert(errMessage);
            console.log(err);
        });
    }
}

function InputField({placeholder, name}) {
    return <input placeholder={placeholder} name={name} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>
}

function InputGridList({children}) {
    return (
        <div className="grid grid-cols-3 gap-5 w-full">
            {children}
        </div>
    )
}

function OnceInput({placeholder, name}) {
    return <input placeholder={placeholder} name={name} className={'max-w-72 px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input>

}

function AddUser () {
    const [isOpen, setIsOpen] = useState(false);

    function localSendFormData (url, formData) {
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
                    localSendFormData(`http://${host}:5000/signup`, formData)
                }}>
                <InputGridList>
                    <InputField placeholder={'Name'} name={'name'}/>
                    <InputField placeholder={'Email'} name={'email'}/>
                    <InputField placeholder={'Password'} name={'password'}/>
                </InputGridList>
                <SubmitButton color={'bright'} text={'Зарегистрироваться'}/>
            </form>
        </div>
    )
}

function RemoveUser () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <p>Удалить пользователя</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'remove-user-form'} onSubmit={function (e)  {
                    dataProc('removeuser', 'Пользователь успешно удален', 'Такого пользователя не существует', 'Ошибка запроса', e, 'remove-user-form', 'DELETE')
                }}>
                <div className='w-full flex gap-x-5 items-center max-w-[752.33px]'>
                    <InputField placeholder={'User ID'} name={'userid'}/>
                    <span className='w-fit'>or</span>
                    <InputField placeholder={'Email'} name={'email'} />
                </div>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
        </div>
    )
}

function TakeAdminRights () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex justify-between items-center'>
                <p>Предоставление прав админа</p>
                <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button>
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'admin-user-form'} onSubmit={function (e)  {
                    if (e.nativeEvent.submitter.id == 'take') {
                        dataProc('takerights', 'Запрос выполнен успешно', 'Запрос не выполнен', 'Ошибка запроса', e, 'admin-user-form', 'POST')
                    } else {
                        dataProc('recallrights', 'Запрос выполнен успешно', 'Запрос не выполнен', 'Ошибка запроса', e, 'admin-user-form', 'POST')
                    }
                    
                }}>
                <div className='w-full flex gap-x-5 items-center max-w-[752.33px]'>
                    <InputField placeholder={'User ID'} name={'userid'}/>
                    <span className='w-fit'>or</span>
                    <InputField placeholder={'Email'} name={'email'}/>
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

function AddTags() {
    const [tags, setTags] = useState([{id: 1}]);

    function addT(e) {
        e.preventDefault();
        let newTags = [];
        tags.forEach((elem) => {
            newTags.push(elem);
        });
        newTags.push({id: newTags[newTags.length - 1].id + 1});
        setTags(newTags);
    }

    function removeT(e) {
        e.preventDefault();
        if (tags.length > 1) {
            let newTags = [];
            tags.forEach((elem) => {
                newTags.push(elem);
            });
            newTags.pop();
            setTags(newTags);
        } else return 
    }

    return (
        <>
            <div className="flex gap-x-5 items-center">
                <p>Добавить тэг</p>
                <div className="bg-cover bg-no-repeat bg-center w-[43px] h-[43px] cursor-pointer" style={{backgroundImage: 'url(/plus.svg)'}} onClick={(e) => addT(e)}></div>
                <div className="bg-cover bg-no-repeat bg-center w-[43px] h-[43px] cursor-pointer" style={{backgroundImage: 'url(/minus.svg)'}} onClick={(e) => removeT(e)}></div>
            </div>
            <InputGridList>
                {tags.map(tag => <li key={tag.id} className="list-none"><input placeholder="tag" name="tag" className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}></input></li>)}
            </InputGridList>
        </>
    )

}

function AddFileInput() {
    const fileForm = useRef(null);

    return (
        <>
        <button className="w-full px-5 py-10 rounded-[10px] bg-transparent border-super-light border-2 border-dashed" onClick={
            (e) => {
                e.preventDefault();
                fileForm.current.click();
            }
        }>Загрузить файл</button>
        <input type="file" ref={fileForm} accept=".jpg" name={'file'} placeholder="Загрузить файл" className="w-full px- py-10 rounded-[10px] bg-transparent border-super-light border-2 border-dashed hidden" multiple={false}></input></>
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
            
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden hidden'} flex-col gap-y-5 items-start`} id={'add-task-form'} onSubmit={function (e){
                dataProc('addnewtask', 'Задание успешно добавлено', 'Произошла ошибка', 'Произошла ошибка', e, 'add-task-form', 'POST', true)
            }}>
                <InputGridList>
                    <InputField placeholder={'Task ID'} name={'_id'}/>
                    <InputField placeholder={'Class'} name={'class'}/>
                    <InputField placeholder={'Level'} name={'level'}/>
                </InputGridList>
                <AddTags/>
                <p>Добавьте файл в формате .jpg, имя файла должно быть следующим: ID*id задания*, например ID0001.jpg</p>
                <AddFileInput />
                <SubmitButton color={'bright'} text={'Добавить'}/>
            </form>
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
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'remove-task-form'} onSubmit={function (e){
                dataProc('addtask', 'Задание успешно удалено', 'Произошла ошибка', 'Произошла ошибка', e, 'remove-task-form', 'DELETE');
            }}>
                <p>Введите ID задания</p>
                <OnceInput placeholder={"Task ID"} name={'id'}/>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
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
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden hidden'} flex-col gap-y-5 items-start`} id={'edit-task-form'} onSubmit={function (e){
                dataProc('edittask', 'Задание успешно отредактировано', 'Произошла ошибка', 'Произошла ошибка', e, 'edit-task-form', 'POST')
            }}>
                <OnceInput placeholder={'Task ID'} name={'_id'}/>
                <p>Ввести измененные данные</p>
                <InputGridList>
                    <InputField placeholder={'Class'} name={'class'}/>
                    <InputField placeholder={'Level'} name={'level'}/>
                </InputGridList>
                <AddTags />
                <AddFileInput />
                <SubmitButton color={'bright'} text={'Редактировать'}/>
            </form>
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
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'add-answer-form'} onSubmit={function (e){
                dataProc('addanswer', 'Ответ успешно добавлен', 'Произошла ошибка', 'Произошла ошибка', e, 'add-answer-form', 'POST');
            }}>
                <p>Добавьте файл, названный так, чтобы название оканчивалось номером задания</p>
                <SubmitButton color={'bright'} text={'Добавить'}/>
            </form>
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
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'remove-answer-form'} onSubmit={function (e){
                dataProc('removeanswer', 'Ответ успешно удален', 'Произошла ошибка', 'Произошла ошибка', e, 'remove-answer-form', 'DELETE');
            }}>
                <p>Введите ID задания</p>
                <OnceInput placeholder={'Task ID'} name={'id'}/>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
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
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'edit-answer-form'} onSubmit={function (e){
                dataProc('editanswer', 'Ответ успешно отредактирован', 'Произошла ошибка', 'Произошла ошибка', e, 'edit-answer-form', 'POST');
            }}>
                <p>Введите ID задания</p>
                <OnceInput placeholder={'Task ID'} name={'id'}/>
                <SubmitButton color={'bright'} text={'Редактировать'}/>
            </form>
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