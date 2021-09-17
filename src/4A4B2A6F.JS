"use strict";

function DLE(str) {
    let ans = [];
    let curAns = str[0];
    let curPos = 0;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] !== curAns) {
            ans.push(curAns);
            if (i - curPos > 1) {
                ans.push(i - curPos);
            }
            curAns = str[i];
            curPos = i;
        }
    }

    return ans.join("");
}
console.log(DLE("FAAaaaCCCaTT"));
