function switcheroo(x) {
    let arr = x.split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] == "a"
            ? (arr[i] = "b")
            : arr[i] == "b"
            ? (arr[i] = "a")
            : (arr[i] = "c");
    }
    return arr.join("");
}
console.log(switcheroo("accaabbcaacaabbaa"));
