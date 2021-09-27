let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = [];
}

function add(x) {
    let count = 0;
    for (let item of arr[x % arr.length]) {
        if (item == x) count++;
    }
    if (count == 0) arr[x % arr.length].push(x);
}

function find(x) {
    for (let item of arr[x % arr.length]) {
        if (item == x) return true;
    }

    return false;
}

function deleteElem(x) {
    let hash = x % arr.length;
    for (let item of arr[hash]) {
        if (item == x) {
            item = arr[hash][arr[hash].length - 1];
            arr[hash].pop();
            return "done";
        }
    }
}

add(5);
add(5);
add(14);
add(23);

console.log(deleteElem(5));
console.log(find(5));
