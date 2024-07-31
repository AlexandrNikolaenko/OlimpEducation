import Link from "next/link";
import ChoiceAndTasks from "./components/choice";
import Image from "next/image";

const tags = [{id: 1, tagName: 'расчёт'}, {id: 2, tagName: 'строение'}, {id: 3, tagName: 'кристаллохимия'},{id: 4, tagName: 'практика'} , {id: 5, tagName: 'массовые доли'}, {id: 6, tagName: 'кроссворд'}, {id: 7, tagName: 'галогены неорганические реакции'}, {id: 8, tagName: 'цепочки'}, {id: 9, tagName: 'халькогены'}, {id: 10, tagName: 'халькогены2'}, {id: 11, tagName: '5 группа'}, {id: 12, tagName: '5 группа2'}, {id: 13, tagName: '4 группа'}, {id: 14, tagName: '4 группа2'}, {id: 15, tagName: '3 группа'}, {id: 16, tagName: '3 группа2'}, {id: 17, tagName: '2 группа'}, {id: 18, tagName: '1 группа'}, {id: 19, tagName: 'побочные группы'} , {id: 20, tagName: 'побочные группы2'}, {id: 21, tagName:'побочные группы3'}, {id: 22, tagName:'лантаноиды'}, {id: 23, tagName: 'актиноиды'}, {id: 24, tagName: 'd-металлы'}, {id: 25, tagName: 'd-металлы2'}, {id: 26, tagName: 'd-металлы3'}, {id: 27, tagName: 'd-металлы4'}, {id: 28, tagName: 'алканы'}, {id: 29, tagName: 'алкены'}, {id: 30, tagName: 'алкины'}, {id: 31, tagName: 'алкодиены'}, {id: 32, tagName: 'ароматика'}, {id: 33, tagName: 'спирты'}, {id: 34, tagName: 'карбоновые кислоты'}, {id: 35, tagName: 'эфиры'}, {id: 36, tagName: 'азотсодержащие соединения'}]


export default function Home() {
  return (
    <>
      <section className="h-screen bg-cover border-b-light-main border-b-[1px]" style={{backgroundImage: 'url(MainFon.png)'}}>
        <div className="wrapper mx-auto flex flex-col justify-center h-full bg-contain bg-no-repeat bg-right-bottom" style={{backgroundImage: 'url(BigFon.png)'}}>
          <div className="flex flex-col gap-7 items-start w-[738px]">
            <span className="bg-clip-text bg-gradient-to-r from-bright to-medium text-7xl text-transparent font-extrabold font-title">OlimpEducation</span>
            <h4 className="font-help text-[32px]/[1.3em] font-normal tracking-[0.04em]">Наш проект <span className="font-help text-bright">облегчит</span> подготовку к <span className="font-help text-bright">олимпиадам</span>!</h4>
            <p className="font-sans text-2xl/[25px] font-normal tracking-[0.02em]">Теперь, чтобы найти задачу по теме больше не нужно пересматривать множество архивов в попытках найти подходящую, а достаточно вбить интересующий тег, получить условие и наслаждаться процессом решения
            Надеемся, что он поможет вам в достижении самых высоких олимпиадных вершин!</p>
            <button className="font-sans text-2xl/[25px] font-normal tracking-[0.02em] px-[30px] py-2.5 bg-bright hover:bg-light-main focus:bg-light-main transition-colors duration-500 rounded-[10px]">Начать</button>
          </div> 
        </div>
      </section>
      <ChoiceAndTasks />
      <Link href={'/abouttags'}></Link>
    </>
  );
}
