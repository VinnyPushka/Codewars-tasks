function multiply(x, y) {
    if (!y) return (y) => x * y;
    return x * y;
}

console.log(multiply(2)(5));
