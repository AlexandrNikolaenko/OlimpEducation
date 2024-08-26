const tags = [
    {
        key: 1,
        tagName: 'Угадайка',
        description: 'задачи, где нужно узнать элемент по описанию'
    },
    {
        key: 2,
        tagName: 'Расчет',
        description: 'для выхода на элемент в задаче необходим расчёт по массам'
    },
    {
        key: 3,
        tagName: 'Строение',
        description: 'задачи, в которых встречаются кристаллогидраты или вопросы об электронной конфигурации'
    },
    {
        key: 4, 
        tagName: 'Практика',
        description: 'задачи, связанные с качественным анализом'
    },
    {
        key: 5,
        tagName: 'Массовые доли',
        description: 'задачи, в которых необходимо найти бруттоформулы'
    },
    {
        key: 6,
        tagName: 'Неорганические реакции',
        description: 'цепочки превращений неорганических соединений'
    },
    {
        key: 7,
        tagName: 'Цепочки',
        description: 'цепочки преврашений органических соединений'
    },
    {
        key: 8,
        tagName: 'Халькогены',
        description: 'кислород, сера, селен'
    },
    {
        key: 9,
        tagName: 'Халькогены2',
        description: 'телур, полоний'
    },
    {
        key: 10,
        tagName: '5 группа',
        description: 'азот, фосфор, мышьяк'
    },
    {
        key: 11,
        tagName: '5 группа2',
        description: 'сурьма, висмут'
    },
    {
        key: 12,
        tagName: '4 группа',
        description: 'углерода, кремний'
    },
    {
        key: 13,
        tagName: '4 группа2',
        description: 'германий, олово, свинец'
    },
    {
        key: 14,
        tagName: '3 группа',
        description: 'бор, алюминий'
    },
    {
        key: 15,
        tagName: '3 группа2',
        description: 'галий, индий, таллий'
    },
    {
        key: 16,
        tagName: 'Побочные группы',
        description: 'медь, цинк'
    },
    {
        key: 17,
        tagName: 'Побочные группы2',
        description: 'серебро, кадмий'
    },
    {
        key: 18,
        tagName: 'Побочные группы3',
        description: 'золото, ртуть'
    },
    {
        key: 19,
        tagName: 'd-металлы',
        description: 'скандий-никель'
    },
    {
        key: 20,
        tagName: 'd-металлы2',
        description: 'итрий-паладий'
    },
    {
        key: 21,
        tagName: 'd-металлы3',
        description: 'лантан-платина'
    },
]

export default function AboutTags () {
    return (
        <div className="bg-fixed bg-no-repeat bg-contain pt-24 pb-12" style={{backgroundImage: 'url(SecondFon.png)'}}>
            <ul className="wrapper mx-auto flex flex-col gap-5">
                {tags.map((elem) => {
                    return(
                        <li key={elem.key} className="flex flex-col items-start gap-3">
                            <h5 className="text-bright text-[32px]/[1.3em] font-help">{elem.tagName}</h5>
                            <p className="font-sans text-2xl/[25px] tracking-[0.02em]">{elem.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}