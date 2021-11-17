const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [len, ...arr] = inputData.toString().trim().split('\n');

let genTree = arr
    .slice(0, len - 1)
    .map((e) => e.split(' ').map((e) => e.trim()));

let queries = arr.slice(len - 1).map((e) => e.split(' ').map((e) => e.trim()));

function treeSome(arr1, arr2) {
    let treesome = {};
    let reS = [];

    for (let i of arr1) {
        treesome[i[0]] = i[1];
    }

    for (let i of arr2) {
        reS.push(find(i[0], i[1], treesome));
    }

    function find(child1, child2, obj) {
        let isParent = search(child1, obj);
        let isChild = search(child2, obj);

        for (let i of isChild) {
            if (isParent.includes(i)) return i;
        }

        function search(men1, obj) {
            let res = [men1];

            while (obj[men1]) {
                res.push(obj[men1]);
                men1 = obj[men1];
            }

            return res;
        }
    }

    return reS;
}

let result = treeSome(genTree, queries).join(`\n`);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
