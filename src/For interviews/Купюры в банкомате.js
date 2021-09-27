// пример: в банкомате 10000
// загрузим в банкомат следующие номиналы
const limits2 = [
    [1000, 6],
    [500, 5],
    [100, 5],
    [50, 4],
];

function atm(sum, limits) {
    if (sum % 50 !== 0) return "Error: Incorrect value";
    let res = [];
    let resStr = ``;

    for (let i = 0; i < limits.length; i++) {
        let elem = limits[i];
        let needed = Math.min(Math.floor(sum / elem[0]), elem[1]);
        if (needed) {
            sum -= needed * elem[0];
            res.push([elem[0], needed]);
        }
    }

    if (sum > 0) return "Error: Not enough money";

    res.forEach((item) => (resStr += `${item[1]}x${item[0]} `));

    return resStr;
}

console.log(atm(1250, limits2)); // '1x1000 2x100 1x50'
console.log(atm(1000000, limits2)); // 'Error: Not enough money'
console.log(atm(2400, limits2)); // '2x1000 3x100 2x50'
console.log(atm(6512, limits2)); // 'Error: Incorrect value'
console.log(atm(50, limits2)); // '1x50'
console.log(atm(5500, limits2)); // '3x1000 5x500'
