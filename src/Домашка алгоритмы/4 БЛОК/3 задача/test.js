const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let actions = inputData
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map((i) => i.trim()));

function getBlockAmount(arr) {
    let bank = {};
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];

        switch (e[0]) {
            case 'DEPOSIT':
                deposit(e[1], e[2]);
                break;

            case 'WITHDRAW':
                withdraw(e[1], e[2]);
                break;

            case 'TRANSFER':
                transfer(e[1], e[2], e[3]);
                break;

            case 'INCOME':
                income(e[1]);
                break;

            case 'BALANCE':
                balance(e[1]);
                break;
        }
    }

    function deposit(name, sum) {
        bank.hasOwnProperty(name) ? (bank[name] += +sum) : (bank[name] = +sum);
    }

    function withdraw(name, sum) {
        bank.hasOwnProperty(name)
            ? (bank[name] -= +sum)
            : (bank[name] = 0 - +sum);
    }

    function balance(name) {
        let str = bank.hasOwnProperty(name) ? String(bank[name]) : 'ERROR';
        res.push(str);
    }

    function transfer(name1, name2, sum) {
        if (!bank.hasOwnProperty(name1)) bank[name1] = 0;
        if (!bank.hasOwnProperty(name2)) bank[name2] = 0;

        bank[name1] -= +sum;
        bank[name2] += +sum;
    }

    function income(p) {
        for (let i in bank) {
            if (bank[i] > 0)
                bank[i] = Math.trunc(bank[i] + (bank[i] / 100) * p);
        }
    }

    return res.join('\n');
}

let result = getBlockAmount(actions);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
