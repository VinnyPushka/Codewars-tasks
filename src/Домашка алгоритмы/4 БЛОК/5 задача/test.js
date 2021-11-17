const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().split('\n');

let boy = n.trim();
let girl = m.trim();

function getPole(str1, str2) {
    let obj1 = {};
    let finalObj = {};
    let res = [];

    for (let i = 0; i < str1.length; i++) {
        let e = str1[i];
        obj1[e] ? obj1[e]++ : (obj1[e] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let e = str2[i];
        if (obj1[e]) {
            obj1[e]--;
            finalObj[e] ? finalObj[e]++ : (finalObj[e] = 1);
        }
    }

    for (let i in finalObj) {
        let n = finalObj[i];
        while (n > 0) {
            res.push(i);
            n--;
        }
    }

    if (!res.length) return '-1';

    if (res.reverse()[0] === '0') return '0';

    return res.join('');
}

let result = getPole(boy, girl);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
