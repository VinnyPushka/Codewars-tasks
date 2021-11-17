const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let n = inputData.toString().split('\n');
let tShorts = n[1]
    .trim()
    .split(' ')
    .map((e) => Number(e));
let shorts = n[3]
    .trim()
    .split(' ')
    .map((e) => Number(e));

function getMount(arr1, arr2) {
    let res = `${arr1[0]} ${arr2[0]}`;

    let raznica = Math.abs(arr1[0] - arr2[0]);

    for (let i = 0; i < arr1.length; i++) {
        let start = 0;
        let end = arr2.length;
        let middle;

        while (start < end) {
            middle = Math.floor((end + start) / 2);
            if (arr1[i] === arr2[middle]) return `${arr1[i]} ${arr2[middle]}`;
            if (raznica > Math.abs(arr1[i] - arr2[middle])) {
                raznica = Math.abs(arr1[i] - arr2[middle]);
                res = `${arr1[i]} ${arr2[middle]}`;
            }
            if (arr1[i] > arr2[middle]) {
                start = middle + 1;
            } else {
                end = middle;
            }
        }
    }

    return res;
}

let result = getMount(tShorts, shorts);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
