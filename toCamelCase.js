function toCamelCase(str) {
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetStr.split("");
    const strArray = str.toLowerCase().split("");
    if (!str) {
        return str;
    }

    for (let i = 0; i < strArray.length; i++) {
        if (!alphabetStr.includes(strArray[i])) {
            strArray.splice(i, 1);
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    if (str[0] == str[0].toUpperCase()) {
        strArray[0] = str[0];
    }
    return strArray.join("");
}
console.log(toCamelCase(""));
