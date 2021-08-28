let string = "sdadsferec.d;/a,dasdasfdsfaw/s./d"; //! Получить массив [[a, [3, 6, 4,]], [b, [2, 19, 5], .......]

function getStringIndexes(str) {
    return Object.entries(
        str
            .toLowerCase()
            .replace(/[^a-z]/g, "")
            .split("")
            .reduce((res, el, i) => {
                res[el] = res[el] ? [...res[el], i] : [i];
                return res;
            }, {})
    );
}

console.log(getStringIndexes(string));
