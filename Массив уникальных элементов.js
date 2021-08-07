function uniqueElement(text) {
    let startArray = text.toLowerCase().split("");
    let array = [];
    let count = 0;
    for (let x of startArray)
        if (!array.includes(x)) {
            array.push(x);
        }
    for (let i = 0; i < array.length; i++) {
        if (startArray.includes(array[i])) count++;
    }
    return count;
}
console.log(duplicateCount("aabbcde"));
