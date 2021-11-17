const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, ...m] = inputData.toString().trim().split('\n');
let daysAmount = Number(n.split(' ')[0].trim());
let partyHard = m.map((element) =>
    element
        .trim()
        .split(' ')
        .map((e) => Number(e))
);

function getMount(days, ppc) {
    let res = new Set();

    for (let k = 0; k < ppc.length; k++) {
        for (let i = ppc[k][0], j = ppc[k][1]; i <= days; i += j) {
            if (!((i + 1) % 7 === 0 || i % 7 === 0)) res.add(i);
        }
    }

    return res.size;
}

let result = getMount(daysAmount, partyHard);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
