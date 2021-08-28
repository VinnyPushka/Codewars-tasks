// const first = [1, 2, 3, 4];
// const second = [3, 4, 5, 6];
// function intersection(a, b) {
//     let res = [];
//     for (let i of a) {
//         for (let j = 0; j < b.length; j++) {
//             if (i === second[j]) {
//                 res.push(i);
//             }
//         }
//     }
//     return res;
// }

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

// function intersection(a, b) {
//     let res = [];
//     for (let i of a) {
//         if (b.includes(i)) {
//             res.push(i);
//         }
//     }
//     return res;
// }

function intersection(a, b) {
    let obj = {};
    let array = [];
    let arr = a.concat(b);
    for (let i of arr) {
        if (obj[i]) {
            obj[i]++;
        } else {
            obj[i] = 1;
        }
    }
    for (let j in obj) {
        if (obj[j] > 1) array.push(j);
    }
    return array;
}

console.log(intersection(first, second)); //-> [3, 4]
