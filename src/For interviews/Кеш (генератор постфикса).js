function genRandomPostfix(prefix, num) {
    let cache = {};
    return function (prefix) {
        if (cache[prefix]) {
            console.log("взято из кеша");
            return cache[prefix];
        }
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let chars = "abcdefghigklmopqrstuvwxyz";
        let pool = [...nums, ...chars.split("")];
        let string = `_${prefix}_`;
        for (let i = 0; i < num; i++) {
            let random = Math.floor(Math.random() * (pool.length + 1));
            string += pool[random];
        }
        cache[prefix] = string;
        console.log("добавлено в кеш");
        return string;
    };
}

const genRandomString = genRandomPostfix("_prefix_", 4);

console.log(genRandomString("fdkl"));
console.log(genRandomString("f3kl"));
console.log(genRandomString("fd5l"));
console.log(genRandomString("ddkl"));
console.log(genRandomString("fdkf"));
console.log(genRandomString("fdkl"));
console.log(genRandomString("ddkl"));
