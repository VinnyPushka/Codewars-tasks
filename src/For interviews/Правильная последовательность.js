let a = "((()()()))";

function check(str) {
    let obj = {
        ")": "(",
    };

    let isClosing = (ch) => !!obj[ch];

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let cur = str[i];
        if (isClosing(cur)) {
            if (stack.pop() !== obj[cur]) return false;
        } else stack.push(cur);
    }

    return stack.length === 0;
}

console.log(check(a));
