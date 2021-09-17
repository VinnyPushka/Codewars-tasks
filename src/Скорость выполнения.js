console.time("ex 1");
let x = 77;
let y = 99;
for (let i = 0; i < 1000000; i++) {
    // [a, b] = [b, a]; - медленнее, чем:
    let t = x;
    x = y;
    y = x;
}
console.timeEnd("ex 1");
