function checkAnagram(Word1, Word2) {
    if (Word1.length !== Word2.length) return false;
    let Obj1 = {};
    let Obj2 = {};
    for (const i of Word1) {
        if (Obj1[i]) Obj1[i]++;
        else Obj1[i] = 1;
    }
    for (const i of Word2) {
        if (Obj2[i]) Obj2[i]++;
        else Obj2[i] = 1;
    }
    for (let i = 0; i < Word1.length; i++) {
        if (Obj1[Word1[i]] !== Obj2[Word1[i]]) {
            return false;
        }
    }
    return true;
}
console.log(checkAnagram("аааппккаа", "аакпакаап"));
