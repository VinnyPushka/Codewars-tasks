const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [len, ...arr] = inputData
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.trim());

let genTree = [];
let queries = [];

for (let i = 0; i < arr.length; i++) {
    if (i < len - 1) genTree.push(arr[i]);
    else queries.push(arr[i]);
}

genTree = genTree.map((e) => e.split(' '));
queries = queries.map((e) => e.split(' '));

function treeSome(arr1, arr2) {
    let treesome = {};
    let res = [];

    for (let i of arr1) {
        addToTreesome(i[0], i[1], treesome);
    }

    for (let i of arr2) {
        find(i[0], i[1], treesome);
    }

    function addToTreesome(child, parent, obj) {
        obj[child] = parent;
    }

    function find(child, parent, obj) {
        let isParent = search(child, parent, obj);

        if (isParent) {
            res.push('2');
            return;
        }

        let isChild = search(parent, child, obj);

        if (isChild) {
            res.push('1');
            return;
        }

        res.push('0');

        function search(men1, men2, obj) {
            if (obj[men1]) {
                return obj[men1] === men2 ? true : search(obj[men1], men2, obj);
            } else return false;
        }
    }

    return res;
}

let result = treeSome(genTree, queries).join(` `);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);

// function actionTree(gen, quer) {
//     let result = [];

//     class Node {
//         constructor(value) {
//             this.value = value;
//             this.childrens = [];
//             this.depth = 0;
//         }
//     }

//     class BTree {
//         constructor() {
//             this.root = null;
//         }

//         add(child, parent) {
//             const newNode = new Node(parent);
//             const childNode = new Node(child);

//             if (!this.root) {
//                 this.root = newNode;
//                 childNode.depth = this.root.depth + 1;
//                 this.root.childrens.push(childNode);
//                 return;
//             }

//             let finded = false;

//             poisk(this.root);

//             function poisk(node) {
//                 if (node.value === parent) {
//                     childNode.depth = node.depth + 1;
//                     node.childrens.push(childNode);
//                     finded = true;
//                     return;
//                 }

//                 for (let i of node.childrens) {
//                     poisk(i);
//                     if (finded) return;
//                 }
//             }
//         }

//         search(child, parent) {
//             let needParent = null;
//             let needChild = null;
//             let res = '';

//             findParent(this.root);

//             if (!needParent) {
//                 result.push('0');
//                 return;
//             }

//             if (needParent.value === parent) {
//                 res = '2';
//                 findChild(needParent, child);
//             } else {
//                 res = '1';
//                 findChild(needParent, parent);
//             }

//             if (!needChild) {
//                 result.push('0');
//                 return;
//             }

//             result.push(res);

//             function findParent(node) {
//                 if (node.value === parent || node.value === child) {
//                     needParent = node;
//                 } else {
//                     for (let i of node.childrens) {
//                         findParent(i);
//                         if (needParent) break;
//                     }
//                 }
//             }

//             function findChild(node, matchWith) {
//                 if (node.value === matchWith) {
//                     needChild = node;
//                 } else {
//                     for (let i of node.childrens) {
//                         findChild(i, matchWith);
//                         if (needChild) break;
//                     }
//                 }
//             }
//         }
//     }

//     let tree = new BTree();

//     for (let item of gen) {
//         tree.add(item[0], item[1]);
//     }

//     for (let item of quer) {
//         tree.search(item[0], item[1]);
//     }

//     return result;
// }
