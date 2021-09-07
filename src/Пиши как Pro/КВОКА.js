const fibonacci = [1, 1, 2, 3, 5, 8];
const nextFib = fibonacci.concat([13]);
const next = [...nextFib, 21];

next.every((n) => typeof n === "number"); //?
next.findIndex((n) => n === 5); //?

next.map((num) => num ** 2) //? $.length //?
    .filter((num) => num % 2 === 0) //? $.length
    .reduce((acc, n) => acc + n, 0); //? $.toFixed(3)
