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
            this.depth = 1;
        }
    }

    class BTree {
        constructor() {
            this.root = null;
            this.balanced = true;
        }

        add(value) {
            const newNode = new Node(value);

            if (!this.root) {
                this.root = newNode;
                return;
            }

            let currentNode = this.root;

            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    }
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
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

        inOrder(node) {
            if (!node) {
                return;
            }

            this.inOrder(node.left);
            let leftDepth = node.left ? node.left.depth : 0;

            this.inOrder(node.right);
            let rightDepth = node.right ? node.right.depth : 0;

            node.depth = Math.max(rightDepth, leftDepth) + 1;

            if (Math.abs(rightDepth - leftDepth) > 1) this.balanced = false;
        }

        print() {
            this.balanced = true;
            this.inOrder(this.root);
            return this.balanced ? 'YES' : 'NO';
        }
    }

    let tree = new BTree();

    for (let i = 0; i < arr.length - 1; i++) {
        tree.add(arr[i]);
    }

    return tree.print();
}

let result = actionTree(n);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
