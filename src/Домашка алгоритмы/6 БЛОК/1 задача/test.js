const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let n = inputData
    .toString()
    .split('\n')
    .map((e) => e.trim().split(' '));

function actionTree(arrOfStr) {
    let res = [];

    class Node {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    class BTree {
        constructor() {
            this.root = null;
        }

        add(value) {
            const newNode = new Node(value);
            if (!this.root) {
                this.root = newNode;
                res.push('DONE');
                return;
            }

            let currentNode = this.root;

            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        res.push('DONE');
                        return;
                    }

                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        res.push('DONE');
                        return;
                    }

                    currentNode = currentNode.right;
                } else {
                    res.push('ALREADY');
                    return;
                }
            }

            currentNode;
        }

        search(node, value) {
            let finded = false;

            if (!node) {
                return finded;
            }

            if (node.value === value) {
                finded = true;
                return finded;
            }

            if (node.value !== value) {
                finded = this.search(node.left, value);
                if (finded) {
                    return finded;
                } else {
                    finded = this.search(node.right, value);
                }
            }

            return finded;
        }

        find(value) {
            this.search(this.root, value) ? res.push('YES') : res.push('NO');
        }

        inOrder(node, str) {
            if (!node) {
                return;
            }

            this.preOrder(node.left, `${str}.`);
            res.push(`${str}${node.value}`);
            this.preOrder(node.right, `${str}.`);
        }

        print() {
            this.preOrder(this.root, '');
        }
    }

    let tree = new BTree();

    for (let item of arrOfStr) {
        if (item[0] === 'ADD') {
            tree.add(+item[1]);
        }
        if (item[0] === 'SEARCH') {
            tree.find(+item[1]);
        }
        if (item[0] === 'PRINTTREE') {
            tree.print();
        }
    }

    return res.join('\n');
}

let result = actionTree(n);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
