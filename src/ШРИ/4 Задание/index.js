function help(amount, array) {
    let arr = [...array];
    arr.sort();
    let array1 = ["", ...array];
    let firstElem = "";
    let firstElemCost;

    if (arr[0] > amount) {
        return "";
    }

    let maxLength = Math.floor(amount / arr[0]);

    let idx = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (Math.floor(amount / arr[i]) === maxLength) {
            idx.push(arr[i]);
        }
    }

    for (let i = 0; i < idx.length; i++) {
        for (let j = 1; j < array1.length; j++) {
            if ((amount % idx[i]) + idx[i] >= array1[j]) {
                if (firstElem < j) {
                    firstElem = j;
                    firstElemCost = array1[j];
                }
            }
        }
    }

    idx.sort((a, b) => array.lastIndexOf(b) - array.lastIndexOf(a));

    if (firstElem && firstElem !== array1.lastIndexOf(idx[0])) {
        amount -= firstElemCost;
    } else {
        firstElem = "";
    }

    let newMaxLength = Math.floor(amount / idx[0]);

    let [first, ...second] = idx;
    let end = [];
    let middle;

    for (let i = 0; i < second.length; i++) {
        end.unshift(array1.indexOf(second[i]));
        delete array1[array1.indexOf(second[i])];
    }

    end.sort((a, b) => b - a);

    if (newMaxLength - 1 < end.length) {
        end = end.slice(0, newMaxLength - 1).join("");
        middle = `${array1.lastIndexOf(first)}`;
    } else if (newMaxLength - 1 >= end.length) {
        end = end.join("");
        middle = `${array1.lastIndexOf(first)}`.repeat(
            newMaxLength - end.length
        );
    }

    return `${firstElem}${middle}${end}`;
}

console.log(help(5, [1, 1, 2, 3]));
// console.log(
//     help(
//         1000000,
//         [555555, 545555, 225555, 100002, 185555, 100003, 885555, 895555, 155555]
//     )
// );
