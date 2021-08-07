function checkPolindrom(newString) {
    let lowStr = newString.toLowerCase();
    for (let i = 0; i < lowStr.length / 2; i++) {
        if (!(lowStr[i] === lowStr[lowStr.length - 1 - i])) {
            return false;
        }
    }
    return true;
}
console.log(checkPolindrom("ТопОт"));
