function getStr(str) {
    let arr = str.split("");
    let separ = arr.shift();
    str = arr.join(`${separ}`);
    return str;
}
console.log(getStr("*privet"));
