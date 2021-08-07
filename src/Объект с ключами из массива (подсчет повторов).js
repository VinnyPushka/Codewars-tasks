function duplicateCount(text) {
    let startArray = text.toLowerCase().split("");
    let obj = {};
    let count = 0;
    for (value of startArray) {
        if (obj[value]) obj[value]++;
        else obj[value] = 1;
    }
    for (let key in obj) {
        if (obj[key] > 1) count++;
    }

    return count;
}
console.log(duplicateCount("aabbcde"));
