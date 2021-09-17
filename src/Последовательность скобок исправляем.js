function correctBrackets(brs) {
    let opening = {
        "[": "]",
        "{": "}",
        "(": ")",
        "<": ">",
    };

    let stack = [];
    let ret = "";

    for (let i = 0; i < brs.length; i++) {
        let c = brs[i];

        if (opening[c]) {
            stack.push(c);
        } else {
            if (stack.length === 0) {
                return null;
            }

            let br = stack.pop();

            c = opening[br];
        }

        ret += c;
    }
    if (stack.length > 0) {
        return null;
    }
}
