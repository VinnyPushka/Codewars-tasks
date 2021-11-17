const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let array = inputData
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.trim());

function getMount(arr) {
    let mass = new Array(arr[0]);
    let every = [];
    let setOfLanguages = new Set();

    for (let i = 1, massIdx = -1; i < arr.length; i++) {
        if (+arr[i]) {
            massIdx++;
            mass[massIdx] = [];
        } else {
            mass[massIdx].push(arr[i]);
            setOfLanguages.add(arr[i]);
        }
    }

    for (let i of setOfLanguages) {
        let state = true;
        for (let j = 0; j < mass.length; j++) {
            if (!mass[j].includes(i)) {
                state = false;
                break;
            }
        }
        if (state) every.push(i);
    }

    return `${every.length}\n${every.join('\n')}\n${
        setOfLanguages.size
    }\n${Array.from(setOfLanguages).join('\n')}`;
}

let result = getMount(array);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
