function flat(arr) {
    let res = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = [...res, ...flat(item)];
        } else {
            res = [...res, item];
        }
    });

    return res;
}

console.log(flat([1, 2, [3, 4], 5, [6, 7, [8, 9, 10, [11, 12]]]]));

console.log([1, 2, [3, 4], 5, [6, 7, [8, 9, 10, [11, 12]]]].flat(Infinity));
