import React from 'react';
import downImage from '../../../../Polygon down.svg';
import upImage from '../../../../Polygon top.svg';
import noneImage from '../../../../Group 1419.svg';

// Импортируем иконки
const downIcon = downImage;
const upIcon = upImage;
const noneIcon = noneImage;

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
}

// Функция для определения нового значения сортировки
export const pureChange = (sort: string, down: string, up: string) => {
    // Определяем новое значение сортировки на основе текущего значения
    if (sort === '') return up; // Если текущее значение пустое, возвращаем 'up'
    if (sort === up) return down; // Если текущее значение 'up', возвращаем 'down'
    return ''; // Если текущее значение 'down', возвращаем пустую строку
}

const SuperSort: React.FC<SuperSortPropsType> = ({
                                                     sort, value, onChange, id = 'hw15',
                                                 }) => {
    const up = '0' + value; // Значение для сортировки по возрастанию
    const down = '1' + value; // Значение для сортировки по убыванию

    // Обработчик изменения сортировки
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    }

    // Определяем иконку в зависимости от текущего состояния сортировки
    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

    return (
        <span
            id={`${id}-sort-${value}`}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer' }} // Добавляем стиль курсора для кликабельности
        >
            <img
                id={`${id}-icon-${sort}`}
                src={icon}
                alt="Sort Icon" // Добавляем alt для доступности
            />
        </span>
    );
}

export default SuperSort;
// import React from 'react'
// import downImage from '../../../../Polygon down.svg'
// import upImage from '../../../../Polygon top.svg'
// import noneImage from '../../../../Group 1419.svg'
// // добавить в проект иконки и импортировать
// const downIcon = downImage
// const upIcon = upImage
// const noneIcon = noneImage
//
// export type SuperSortPropsType = {
//     id?: string
//     sort: string
//     value: string
//     onChange: (newSort: string) => void
// }
//
// export const pureChange = (sort: string, down: string, up: string) => {
//     // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
//     let newSortValue = sort === '' ? up : sort === up ? down : ''
//     return newSortValue // исправить
// }
//
// const SuperSort: React.FC<SuperSortPropsType> = (
//     {
//         sort, value, onChange, id = 'hw15',
//     }
// ) => {
//     const up = '0' + value
//     const down = '1' + value
//
//     const onChangeCallback = () => {
//         onChange(pureChange(sort, down, up))
//     }
//
//     const icon = sort === down
//         ? downIcon
//         : sort === up
//             ? upIcon
//             : noneIcon
//
//     return (
//         <span
//             id={id + '-sort-' + value}
//             onClick={onChangeCallback}
//         >
//             <img
//                 id={id + '-icon-' + sort}
//                 src={icon}
//             />
//         </span>
//     )
// }
//
// export default SuperSort


