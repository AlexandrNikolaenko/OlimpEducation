import Link from "next/link";
import ChoiceAndTasks from "./components/choice";
import Image from "next/image";
import { ScrollButton } from "./components/Buttons";
import PreView from "./components/preView";

const tags = [{id: 1, tagName: 'расчёт'}, {id: 2, tagName: 'строение'}, {id: 3, tagName: 'кристаллохимия'},{id: 4, tagName: 'практика'} , {id: 5, tagName: 'массовые доли'}, {id: 6, tagName: 'кроссворд'}, {id: 7, tagName: 'галогены неорганические реакции'}, {id: 8, tagName: 'цепочки'}, {id: 9, tagName: 'халькогены'}, {id: 10, tagName: 'халькогены2'}, {id: 11, tagName: '5 группа'}, {id: 12, tagName: '5 группа2'}, {id: 13, tagName: '4 группа'}, {id: 14, tagName: '4 группа2'}, {id: 15, tagName: '3 группа'}, {id: 16, tagName: '3 группа2'}, {id: 17, tagName: '2 группа'}, {id: 18, tagName: '1 группа'}, {id: 19, tagName: 'побочные группы'} , {id: 20, tagName: 'побочные группы2'}, {id: 21, tagName:'побочные группы3'}, {id: 22, tagName:'лантаноиды'}, {id: 23, tagName: 'актиноиды'}, {id: 24, tagName: 'd-металлы'}, {id: 25, tagName: 'd-металлы2'}, {id: 26, tagName: 'd-металлы3'}, {id: 27, tagName: 'd-металлы4'}, {id: 28, tagName: 'алканы'}, {id: 29, tagName: 'алкены'}, {id: 30, tagName: 'алкины'}, {id: 31, tagName: 'алкодиены'}, {id: 32, tagName: 'ароматика'}, {id: 33, tagName: 'спирты'}, {id: 34, tagName: 'карбоновые кислоты'}, {id: 35, tagName: 'эфиры'}, {id: 36, tagName: 'азотсодержащие соединения'}]


export default function Home() {
  return (
    <>
      <PreView />
      <ChoiceAndTasks />
    </>
  );
}
