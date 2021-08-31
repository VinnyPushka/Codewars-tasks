function isDigitPerMutation(x, y) {
    function countDigits(num) {
        let count = new Array(10).fill(0);
        while (num > 0) {
            let lastDigit = num % 10;
            count[lastDigit] += 1;
            num = Math.floor(num / 10);
        }
        return count;
    }

    let yCount = countDigits(y);
    let xCount = countDigits(x);

    for (let i = 0; i < yCount.length; i++) {
        if (yCount[i] !== xCount[i]) return false;
    }
    return true;
}

console.log(isDigitPerMutation(254, 426));
