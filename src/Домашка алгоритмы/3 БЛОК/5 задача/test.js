const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, ...m] = inputData.toString().trim().split('\n');
let digit = Number(n.split(' ')[0].trim());
m.pop();
let answers = m.map((element) =>
    element
        .trim()
        .split(' ')
        .map((e) => Number(e))
);

function getMount(digits, ans) {
    let zagadal = new Set();
    let res = [];

    for (let i = 1; i <= digits; i++) {
        zagadal.add(i);
    }

    ans.forEach((e) => {
        let arr = [];
        for (let i = 0; i < e.length; i++) {
            if (zagadal.has(e[i])) arr.push(e[i]);
        }
        if (arr.length <= zagadal.size / 2) {
            res.push('NO');
            for (let i = 0; i < arr.length; i++) {
                zagadal.delete(arr[i]);
            }
        } else {
            res.push('YES');
            zagadal = new Set(arr);
        }
    });

    return `${res.join('\n')}\n${Array.from(zagadal).join(' ')}`;
}

let result = getMount(digit, answers);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
