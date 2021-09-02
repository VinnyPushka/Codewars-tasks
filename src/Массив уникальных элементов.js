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

//! Или :

const nums = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
const uniqNums = [...new Set(nums)];
