function fibonaci(n) {
    if (n <= 0) {
        return 0;
    }

    if (n <= 2) {
        return 1;
    }

    let prev = 1;
    let current = 1;

    for (let i = 0; i < n - 2; i++) {
        let tmp = current;
        current += prev;
        prev = tmp;
    }

    return current;
}

console.log(fibonaci(7));
