const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const [q, w, e, r, t] = fileContent.toString().split('\n');

function runAway(a, b, c, d, e) {
    if (!a || !b || !c) return 'NO';

    return (a <= d && b <= e) ||
        (a <= e && b <= d) ||
        (a <= d && c <= e) ||
        (a <= e && c <= d) ||
        (b <= e && c <= d) ||
        (b <= d && c <= e)
        ? 'YES'
        : 'NO';
}

let result = runAway(Number(q), Number(w), Number(e), Number(r), Number(t));

fs.writeFileSync('output.txt', result);

// if (d === 0 || e === 0) return false;
// let res = [];
// let kirpich = [a, b, c];
// for (let i = 0; i < kirpich.length; i++) {
//     if (arguments[i] <= Math.min(d, e)) res.push(arguments[i]);
// }

// if (res.length === 0) return 'NO';
// if (res.length >= 2) return 'YES';

// for (let i = 0; i < kirpich.length; i++) {
//     if (arguments[i] <= Math.max(d, e) && arguments[i] > Math.min(d, e)) {
//         return 'YES';
//     }
// }

// return 'NO';
