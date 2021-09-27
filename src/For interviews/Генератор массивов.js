const srcData = {
    digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    bool: [true, false],
    symbolLow: "abcdefghijklmnopqrstuvwxyz",
    symbolUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

const randomInt = (min, max) => {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
};

const arrayGenerator = (num = 5, params = ["digit"]) => {
    let t = [];
    let result = [];
    try {
        params.forEach((item) => {
            if (srcData[item] !== undefined) {
                t = [...t, ...srcData[item]];
            }
        });
        for (let i = 0; i < num; i++) {
            let index = randomInt(0, t.length);
            result.push(t[index]);
        }
    } catch (err) {
        console.log(err);
    }
    return result;
};

console.log(arrayGenerator(10, ["digit", "symbolUpper"]));
