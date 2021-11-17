const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, distances] = inputData.toString().split('\n');
let [len, legs] = n.split(' ').map((e) => Number(e.trim()));
distances = distances.split(' ').map((e) => Number(e.trim()));

function getMount(len, array) {
    let center = len / 2;
    let isEven = len % 2 === 0 ? true : false;

    if (!isEven) {
        if (array.includes(Math.floor(center))) return `${Math.floor(center)}`;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] < center && array[i + 1] >= center)
            return `${array[i]} ${array[i + 1]}`;
    }
}

let result = getMount(len, distances);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);

// let left = array[0];
//     let right = array[array.length - 1];
//     for (let i = 0; i < array.length; i++) {
//         if (isEven) {
//             if (array[i] > left && array[i] < center) left = array[i];
//             if (array[i] < right && array[i] >= center) right = array[i];
//         } else {
//             if (array[i] > left && array[i] <= center) left = array[i];
//             if (array[i] < right && array[i] >= Math.floor(center))
//                 right = array[i];
//         }
//     }
