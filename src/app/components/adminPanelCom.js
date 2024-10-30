'use client'

import { useState } from "react";
import { SubmitButton, ArrowButton } from "../components/Buttons";
import { host } from "../components/host";

export function ControlAccUsers() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-5 flex flex-col gap-y-5 justify-center'>
            <div className='flex justify-between items-center'>
                <Text>Управление аккаунтами пользователей</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <div className={`flex-col gap-y-2.5 px-7 max-tab:px-5 max-mob:px-3 ${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} transition-all duration-200`}>
                <AddUser />
                <RemoveUser />
                <TakeAdminRights />
                <ShowAllUsers />
            </div>
        </div>
    )
}

export function Text({children}) {
    return <p className="font-sans text-xl max-tab:text-base max-mob:text-xs">{children}</p>
}

function TableText({children}) {
    return <div className="w-full overflow-hidden"><p className="font-serif text-base max-tab:text-xs max-mob:text-[8px] text-center">{children}</p></div>
}

function dataProc(url, successMessage, noSuccessMessage, errMessage, event, id, method, isFile=false) {
    event.preventDefault();
    let formData = new FormData(document.getElementById(id));
    let relFormData = formData;
    formData = Object.fromEntries(formData);
    sendFormData(`http://${host}:5000/${url}`, formData, successMessage, noSuccessMessage, errMessage, method, isFile,  relFormData);
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
    if (isFile) {
        fetch(`${url}file`, {
            method: method,
            body: relFormData
        })
        .then((res) => res.json())
        .then((data) => { 
            if (data.res == 'success') alert('Файл успешно добавлен')
            else alert(noSuccessMessage)
        })
        .catch((err) => {
            alert(errMessage);
            console.log(err);
        });
    }
}

function InputField({placeholder, name}) {
    return <input placeholder={placeholder} name={name} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'} autocomplete="off"></input>
}

function InputGridList({children}) {
    return (
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 w-full">
            {children}
        </div>
    )
}

function OnceInput({placeholder, name}) {
    return <input placeholder={placeholder} name={name} className={'max-w-72 px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'}autocomplete="off"></input>

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
                <Text>Добавить пользователя</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
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
                <Text>Удалить пользователя</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
            <form className={`flex-col gap-y-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'remove-user-form'} onSubmit={function (e)  {
                    dataProc('removeuser', 'Пользователь успешно удален', 'Такого пользователя не существует', 'Ошибка запроса', e, 'remove-user-form', 'DELETE')
                }}>
                <div className='w-full flex flex-row max-md:flex-col gap-5 items-center max-w-[752.33px]'>
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
                <Text>Предоставление прав админа</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
            <form className={`flex-col gap-5 px-7 ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} items-end`} id={'admin-user-form'} onSubmit={function (e)  {
                    if (e.nativeEvent.submitter.id == 'take') {
                        dataProc('takerights', 'Запрос выполнен успешно', 'Запрос не выполнен', 'Ошибка запроса', e, 'admin-user-form', 'POST')
                    } else {
                        dataProc('recallrights', 'Запрос выполнен успешно', 'Запрос не выполнен', 'Ошибка запроса', e, 'admin-user-form', 'POST')
                    }
                }}>
                <div className='w-full flex flex-row max-md:flex-col gap-5 items-center max-w-[752.33px]'>
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
                <button className='w-full text-left font-sans text-xl max-md:text-base max-sm:text-xs' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать всех пользователей</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} w-full overflow-x-scroll`}>
                <li className="grid grid-cols-6 py-3 min-w-[310px]">
                    <TableText>userId</TableText>
                    <TableText>isAdmin</TableText>
                    <TableText>donetask_ids</TableText>
                    <TableText>name</TableText>
                    <TableText>password</TableText>
                    <TableText>email</TableText>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-6 py-3 items-center min-w-[310px]" key={row.userId}>
                            <TableText>{row.userId}</TableText>
                            <TableText>{`${row.isAdmin == '1'}`}</TableText>
                            <TableText>{row.donetask_ids}</TableText>
                            <TableText>{row.name}</TableText>
                            <TableText>{row.password}</TableText>
                            <TableText>{row.email}</TableText>
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
                <Text>Управление базой заданий</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex pt-1' : 'h-0 overflow-hidden none pt-0'} flex-col px-7 max-tab:px-5 max-mob:px-3`}>
                <ControlTableTask />
                <ControlTableAnswers />
            </div>
        </div>
    )
}

function ControlTableTask () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-2.5'>
            <div className='flex justify-between items-center'>
                <Text>Управление таблицой заданий</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <div className={`${isOpen ? 'h-auto flex gap-3' : 'h-0 overflow-hidden none'} flex-col pt-2.5 px-6 max-tab:px-4 max-mob:px-2`}>
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
                <Text>Добавить тэг</Text>
                <div className="bg-cover bg-no-repeat bg-center w-[43px] h-[43px] cursor-pointer" style={{backgroundImage: 'url(/plus.svg)'}} onClick={(e) => addT(e)}></div>
                <div className="bg-cover bg-no-repeat bg-center w-[43px] h-[43px] cursor-pointer" style={{backgroundImage: 'url(/minus.svg)'}} onClick={(e) => removeT(e)}></div>
            </div>
            <InputGridList>
                {tags.map(tag => <li key={tag.id} className="list-none"><input placeholder="tag" name={`tag${tag.id}`} className={'w-full px-5 py-2.5 rounded-[10px] bg-transparent border-super-light border-2'} autocomplete="off"></input></li>)}
            </InputGridList>
        </>
    )

}

function Option ({value}) {
    return <option value={value} className="bg-main border-super-light">{value}</option>
}

function AddFileInput({ name, formId, setIsEmpty, accept=".jpg", multiple=false }) {
    const [nameFile, setNameFile] = useState(name);

    return (
        <>
            <button className="w-full px-5 py-10 rounded-[10px] bg-transparent border-super-light border-2 border-dashed" onClick={
                (e) => {
                    e.preventDefault();
                    document.getElementById(formId).click();
                }
            }>{nameFile}</button>
            <input type="file" accept={accept} name={`${multiple ? 'files[]' : 'file'}`} id={formId} placeholder="Загрузить файл" className="w-full px- py-10 rounded-[10px] bg-transparent border-super-light border-2 border-dashed hidden" multiple={multiple} autocomplete="off" onChange={(e) => {
                e.preventDefault();
                let names = [];
                Array.from(e.target.files).forEach(file => names.push(file.name));
                names = names.join(', ');
                setNameFile(names);
                setIsEmpty(false);
            }}></input>
        </>
    )
}

function AddTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmptyFile, setIsEmptyFile] = useState(true);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Добавить задание</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
            
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden hidden'} flex-col gap-y-5 items-start`} id={'add-task-form'} onSubmit={function (e){
                dataProc('addnewtask', 'Задание успешно добавлено', 'Произошла ошибка', 'Произошла ошибка', e, 'add-task-form', 'POST', !isEmptyFile);
            }}>
                <InputGridList>
                    <InputField placeholder={'Task ID'} name={'_id'}/>
                    <InputField placeholder={'Class'} name={'class'}/>
                    <InputField placeholder={'Level'} name={'level'}/>
                </InputGridList>
                <AddTags/>
                <Text>Добавьте файл в формате .jpg, имя файла должно быть следующим: ID*id задания*, например ID0001.jpg или ID0001(1).jpg</Text>
                <AddFileInput name={'Загрузить файл'} formId={'inputfile1'} setIsEmpty={setIsEmptyFile} multiple={true}/>
                <SubmitButton color={'bright'} text={'Добавить'}/>
            </form>
        </div>
    )
}

function RemoveTask() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Удалить задание</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'remove-task-form'} onSubmit={function (e){
                dataProc('removetaskadmin', 'Задание успешно удалено', 'Произошла ошибка', 'Произошла ошибка', e, 'remove-task-form', 'DELETE');
            }}>
                <Text>Введите ID задания</Text>
                <OnceInput placeholder={"Task ID"} name={'id'}/>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
        </div>
    )
}

function EditTask() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmptyFile, setIsEmptyFile] = useState(true);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Редактиовать задание</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden hidden'} flex-col gap-y-5 items-start`} id={'edit-task-form'} onSubmit={function (e){
                dataProc('edittask', 'Задание успешно отредактировано', 'Произошла ошибка', 'Произошла ошибка', e, 'edit-task-form', 'POST', !isEmptyFile)
            }}>
                <OnceInput placeholder={'Task ID'} name={'_id'}/>
                <Text>Ввести измененные данные</Text>
                <InputGridList>
                    <InputField placeholder={'Class'} name={'class'}/>
                    <InputField placeholder={'Level'} name={'level'}/>
                </InputGridList>
                <AddTags />
                <AddFileInput name='Загрузить файл' formId={'inputfile2'} setIsEmpty={setIsEmptyFile} multiple={true}/>
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
                <button className='w-full text-left font-sans text-xl max-md:text-base max-sm:text-xs' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать все задания</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} w-full overflow-x-scroll`}>
                <li className="grid grid-cols-5 py-3 min-w-[310px]">
                    <TableText>id</TableText>
                    <TableText>_id</TableText>
                    <TableText>class</TableText>
                    <TableText>level</TableText>
                    <TableText>tags</TableText>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-5 py-3 items-center min-w-[310px]" key={row._id}>
                            <TableText>{row.id}</TableText>
                            <TableText>{row._id}</TableText>
                            <TableText>{row.class}</TableText>
                            <TableText>{row.level}</TableText>
                            <TableText>{row.tags}</TableText>
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
        <div className='py-2.5'>
            <div className='flex justify-between items-center'>
                <Text>Управление таблицой ответов</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <div className={`flex ${isOpen ? 'h-auto flex gap-y-3' : 'h-0 overflow-hidden none'} flex-col pt-2.5 px-6 max-tab:px-4 max-mob:px-2`}>
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
    const [isEmptyFile, setIsEmptyFile] = useState(true);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Добавить ответ</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'add-answer-form'} onSubmit={function (e){
                dataProc('addanswer', 'Ответ успешно добавлен', 'Произошла ошибка', 'Произошла ошибка', e, 'add-answer-form', 'POST', !isEmptyFile);
            }}>
                <Text>Добавьте файл в формате pdf, названный так, чтобы название оканчивалось номером задания</Text>
                <AddFileInput name={'Загрузить файл'} formId={'add-answer-form'} setIsEmpty={setIsEmptyFile} accept=".pdf"/>
                <SubmitButton color={'bright'} text={'Добавить'}/>
            </form>
        </div>
    )
}

function RemoveAnswer() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Удалить ответ</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'remove-answer-form'} onSubmit={function (e){
                dataProc('removeanswer', 'Ответ успешно удален', 'Произошла ошибка', 'Произошла ошибка', e, 'remove-answer-form', 'DELETE');
            }}>
                <Text>Введите ID задания</Text>
                <OnceInput placeholder={'Task ID'} name={'id'}/>
                <SubmitButton color={'bright'} text={'Удалить'}/>
            </form>
        </div>
    )
}

function EditAnswer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmptyFile, setIsEmptyFile] = useState(true);
    
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Text>Редактиовать ответ</Text>
                <ArrowButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                {/* <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image alt='arrow' src={'/Arrow.svg'} height={43} width={43}/>
                </button> */}
            </div>
            <form className={`${isOpen ? 'h-auto flex ' : 'h-0 overflow-hidden none'} flex-col gap-y-5 items-start`} id={'edit-answer-form'} onSubmit={function (e){
                dataProc('editanswer', 'Ответ успешно отредактирован', 'Произошла ошибка', 'Произошла ошибка', e, 'edit-answer-form', 'POST', !isEmptyFile);
            }}>
                <Text>Введите ID задания</Text>
                <OnceInput placeholder={'Task ID'} name={'id'}/>
                <AddFileInput name={'Загрузить файл'} formId={'edit-answer-form'} accept=".pdf" setIsEmpty={setIsEmptyFile}/>
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
                <button className='w-full text-left font-sans text-xl max-md:text-base max-sm:text-xs' onClick={() => {showData(); setIsOpen(!isOpen)}}>Показать все ответы</button>
            </div>
            <ul className={`flex flex-col divide-y-[1px] divide-medium ${isOpen ? 'h-auto flex' : 'h-0 overflow-hidden none'} w-full overflow-x-scroll`}>
                <li className="grid grid-cols-2 py-3">
                    <TableText>id</TableText>
                    <TableText>nameFile</TableText>
                </li>
                {tableData.map(row => {
                    return (
                        <li className="grid grid-cols-2 py-3 items-center" key={row.id}>
                            <TableText>{row.id}</TableText>
                            <TableText>{row.nameFile}</TableText>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}