function checkAnagram(Word1, Word2) {
    if (Word1.length !== Word2.length) return false;
    Word1 = Word1.split("").sort().join("");
    Word2 = Word2.split("").sort().join("");

    return Word1 === Word2;
}
console.log(checkAnagram("аааппккаа", "какаапаап"));
