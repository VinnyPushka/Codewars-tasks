function map(array, callback) {
    const Arr = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        Arr.push(callback(item, i, array));
    }
    return Arr;
}

console.log(
    map([1, 2, 3, 4, 5, 6, 7], (e, i) => {
        if (i > 3) return 1;
        return 2;
    })
);
