/* Дан массив возрастов в семье, вернуть массив с возрастом самого младшего, самого старшего и разницу между самым старшим и младшим.
 Если ребенку 9 месяцев, считаем как 0. P.S. Желательно не использовать встроенные функции типа sort и т.д.
*/

function differenceInAges(ages) {
    let min = ages[0];
    let max = ages[0];

    for (let i of ages) {
        if (i < min) {
            min = i;
        } else if (i > max) {
            max = i;
        }
    }

    return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));

console.log(differenceInAges([57, 99, 14, 42]));
