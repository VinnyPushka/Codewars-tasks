/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
 А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
function formatDate(date) {
    let seconds = Math.round((Date.now() - date) / 1000);

    let d = [
        "0" + date.getDate(),
        "0" + date.getMonth() + 1,
        "0" + date.getFullYear(),
        "0" + date.getHours(),
        "0" + date.getMinutes(),
    ].map((component) => component.slice(-2));

    let formated_date = d.slice(0, 3).join(".") + " " + d.slice(3).join(":");

    return seconds < 1
        ? "прямо сейчас"
        : seconds < 60
        ? `${seconds} сек. назад`
        : seconds < 3600
        ? `${Math.round(seconds / 60)} мин. назад`
        : formated_date;
}
