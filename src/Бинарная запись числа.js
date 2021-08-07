function killKthBit(n, k) {
    let binary = n.toString(2).split("");
    binary[binary.length - k] = "0";
    binary = binary.join("");

    return parseInt(binary, 2);
}
console.log(killKthBit(37, 3));
