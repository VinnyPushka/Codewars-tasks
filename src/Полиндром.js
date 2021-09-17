// palindrome('racecar'); // true
// palindrome('table'); // false
// palindrome('Анна'); // true
// palindrome('А-роза_упала на лапу Азора'); // true

function palindrome(str) {
    str = str.toLowerCase().replace(/\W/g, ""); //Все не-числобуквенные значения
    return str === str.split("").reverse().join("");
}

function palindrome2(str) {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    return true;
}

console.log(
    palindrome("racecar"), // true
    palindrome("table"), // false
    palindrome("Анна"), // true
    palindrome("А роза упала на лапу Азора")
); // true);
