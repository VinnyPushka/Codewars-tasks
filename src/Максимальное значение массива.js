const a = [8, 1, 6, 3, 9];

let getMaxOfArray = (array) => Math.max.apply(null, array);

console.log(getMaxOfArray(a));

let getMaxOfArray1 = (array) => Math.max(...array);

console.log(getMaxOfArray1(a));
