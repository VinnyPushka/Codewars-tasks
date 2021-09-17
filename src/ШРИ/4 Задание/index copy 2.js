function help(amount, array) {
    let arr = [...array];
    arr.sort();

    if (arr[0] > amount) {
        return "";
    }

    let maxLength = Math.floor(amount / arr[0]);

    let idx = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (Math.floor(amount / arr[i]) === maxLength) {
            if (!idx.includes(arr[i])) idx.push(arr[i]);
        }
    }

    array.unshift("");

    idx.sort((a, b) => array.lastIndexOf(a) - array.lastIndexOf(b));

    return `${array.lastIndexOf(idx[0])}`.repeat(Math.floor(amount / idx[0]));
}

console.log(help(0, [1, 1]));

// console.log(
//     help(
//         1000000,
//         [555555, 545555, 225555, 100002, 185555, 100003, 885555, 895555, 155555]
//     )
// );
// idx.sort((a, b) => array.lastIndexOf(a) - array.lastIndexOf(b));
// idx.sort((a, b) => (amount % a) - (amount % b));
