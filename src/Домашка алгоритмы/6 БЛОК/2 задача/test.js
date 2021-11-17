const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let n = inputData
    .toString()
    .split(' ')
    .map((e) => Number(e.trim()));

function actionTree(arr) {
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
            this.depth = 1;
        }

        add(value) {
            const newNode = new Node(value);

            if (!this.root) {
                this.root = newNode;
                return;
            }

            let currentDepth = 1;
            let currentNode = this.root;

            while (currentNode) {
                if (value < currentNode.value) {
                    if (this.depth < ++currentDepth) this.depth = currentDepth;
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    }

                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    if (this.depth < ++currentDepth) this.depth = currentDepth;
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    }

                    currentNode = currentNode.right;
                } else {
                    return;
                }
            }
        }
    }

    let tree = new BTree();

    for (let i = 0; i < arr.length - 1; i++) {
        tree.add(arr[i]);
    }

    return `${tree.depth}`;
}

let result = actionTree(n);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
