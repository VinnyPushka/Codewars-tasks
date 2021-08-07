function checkPolindrom(newString) {
    let lowStr = newString.toLowerCase();
    let firstPart = "";
    let secondPart = "";
    for (let i = 0; i < Math.floor(lowStr.length / 2); i++) {
        firstPart += lowStr[i];
    }
    for (let j = lowStr.length - 1; j >= Math.ceil(lowStr.length / 2); j--) {
        secondPart += lowStr[j];
    }
    return firstPart === secondPart;
}

console.log(checkPolindrom("ТоПот"));
