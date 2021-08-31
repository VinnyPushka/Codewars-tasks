//Переписать if...else на switch

/*const number = +prompt("Введите число между 0 и 3", "");

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/
const number = "2";
switch (+number) {
    case 0:
    case 1:
        console.log(`Вы ввели число ${number}`);
        break;
    case 2:
    case 3:
        console.log("Вы ввели число 2, а может и 3");
        break;
}
