const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().split('\n');

n = Number(n.trim());
m = m.split(' ').map((e) => Number(e.trim()));

function getMount(length, distances) {
    let firstIndexMaxDistance = 0;
    let vasyaDistance = 0;

    for (let i = 1; i < length; i++) {
        if (distances[i] > distances[firstIndexMaxDistance]) {
            firstIndexMaxDistance = i;
        }
    }

    for (let i = firstIndexMaxDistance + 1; i < length - 1; i++) {
        if (
            distances[i] % 10 === 5 &&
            distances[i] > distances[i + 1] &&
            distances[i] > vasyaDistance
        ) {
            vasyaDistance = distances[i];
        }
    }

    let dist = distances.sort((a, b) => b - a);
    return dist.indexOf(vasyaDistance) + 1;
}

let result = getMount(n, m);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
