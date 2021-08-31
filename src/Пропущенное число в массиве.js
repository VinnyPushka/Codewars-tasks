arr = [1, 2, 3, 4, 5, 6, , 8, 9, 10];
let sum = eval(arr.join("+").replace("++", "+"));
let neededSum = (arr.length + 1) * (arr.length / 2);
let result = neededSum - sum;
console.log(result);
