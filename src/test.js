function findDublicates(arr) {
    let unique = {};
    arr.forEach((element) => {
        unique[element] ? unique[element]++ : (unique[element] = 1);
    });

    for (let el in unique) {
        if (unique[el] === 1) return el;
    }
}

let array = [1, 2, 3, 4, 9, 3, 8, 1, 2, 9, 8];

console.log(findDublicates(array));
