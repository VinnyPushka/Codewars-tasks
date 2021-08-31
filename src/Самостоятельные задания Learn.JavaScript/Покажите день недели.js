/*Напишите функцию getWeekDay(date), 
показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

function getWeekDay(date) {
    let days = [`ВС`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"
