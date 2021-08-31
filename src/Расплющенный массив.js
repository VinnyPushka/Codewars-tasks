function flat(arr) {
    let res = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flat(item));
        } else {
            res.push(item);
        }
    });

    return res;
}

console.log(flat([1, 2, [3, 4], 5, [6, 7, [8, 9, 10, [11, 12]]]]));
