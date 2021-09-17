const array = [1, 2, 3, 4, 5, [6, 7, 8, [9, [10]]]];

function clbck(res, item) {
    if (Array.isArray(item)) return [...res, ...item.reduce(clbck, [])];
    return [...res, item];
}

let flatten = array.reduce(clbck, []);
console.log(flatten);
