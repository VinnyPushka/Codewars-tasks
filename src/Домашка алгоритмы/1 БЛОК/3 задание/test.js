const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, k, m] = inputData
    .toString()
    .split(' ')
    .map((num) => Number(num));

function getMount(n, k, m) {
    let res = 0;

    if (n < k || k < m) return res;

    let kMount = Math.floor(n / k);
    let kOstatok = n % k;

    let mINk = Math.floor(k / m);

    let mMount = mINk * kMount;
    let mOstatok = kMount * k - mMount * m;

    res = mMount + getMount(kOstatok + mOstatok, k, m);

    return res;
}

let result = getMount(n, k, m);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
