/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
 А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/
function formatDate(date) {
    let diff = new Date() - date; //нашли разницу в мс

    if (diff < 1000) {
        return "прямо сейчас";
    }

    let sec = Math.floor(diff / 1000); // милисек в сек

    if (sec < 60) {
        return sec + " сек. назад";
    }

    let min = Math.floor(diff / 60000); // разница в минутах
    if (min < 60) {
        return min + " мин. назад";
    }

    let d = date;
    d = [
        // добавим нули перед датой и добавим один месяц (т.к. в реале отчет не с 0)
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes(),
    ].map((component) => component.slice(-2)); // берем только последние 2 цифры

    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
