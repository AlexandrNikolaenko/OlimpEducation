/* eslint-disable @next/next/no-img-element */
'use server'

export async function TaskImage ({url}){

    return (
        <div className="wrapper mx-auto w-full rounded-[10px] border-medium border-2 overflow-hidden" >
            <img src={url} className={'w-full'} alt={'Здесь должно быть задание но что-то пошло не так:('}/>
        </div>
    ) 
}