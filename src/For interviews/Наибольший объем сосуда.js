const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const input2 = [1, 1];
const input3 = [4, 3, 2, 1, 4];
const input4 = [1, 2, 1];

function maxArea(inp) {
    let maxValue = 0;

    let lIdx = 0;
    let rIdx = inp.length - 1;
    let L = inp[lIdx];
    let R = inp[rIdx];

    while (lIdx !== rIdx) {
        let height = Math.min(L, R);
        let value = height * (rIdx - lIdx);
        maxValue = Math.max(maxValue, value);
        if (L < R) {
            lIdx++;
            L = inp[lIdx];
        } else {
            rIdx--;
            R = inp[rIdx];
        }
    }

    return maxValue;
}

console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));
