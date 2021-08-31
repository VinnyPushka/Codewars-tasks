function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        // пройдемся по всем элементам arr
        let sortWord = word.toLowerCase().split("").sort().join(""); //уменьшим шрифт, преобразуем в массив, отсортируем, объединим в строку
        map.set(sortWord, word); // присвоим общую часть анограм в key объекта map, в values запишем соответствующий последний элемент из перебора
    }
    return Array.from(map.values()); // вернем все значения values из объекта map в виде массива
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// Тоже самое, только без map. Через объект
/* function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );
*/
