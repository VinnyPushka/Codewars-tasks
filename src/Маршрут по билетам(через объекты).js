const tickets = [
    ["CEB", "TAC"], //3
    ["TAC", "BOR"], //1
    ["TAG", "CEB"], //2 //
    ["MNL", "TAG"], //4
]; //'MNL, TAG, CEB, TAC, BOR'

let path = [];
let obj = {};
// for (ticket of tickets) {
//     obj[ticket[0]] = ticket[1];
// }
obj = Object.fromEntries(tickets);

let ans;
for (elem in obj) {
    for (val of Object.values(obj)) {
        if (elem !== val) ans = elem;
    }
}

while (ans) {
    path.push(ans);
    ans = obj[ans];
}

console.log(path);
