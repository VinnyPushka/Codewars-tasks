function unique(arr) {
    arr = new Set(arr);
    let uniqueString = Array.from(arr).join(" ");
    return uniqueString;
}

let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
