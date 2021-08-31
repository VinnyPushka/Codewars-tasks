/* Напишите функцию getSecondsToday(), 
возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, 
т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
function getSecondsToday() {
    let time = new Date();
    let zeroTime = new Date();
    zeroTime.setHours(0, 0, 0, 0);
    return Math.floor((time - zeroTime) / 1000);
}
console.log(getSecondsToday());
