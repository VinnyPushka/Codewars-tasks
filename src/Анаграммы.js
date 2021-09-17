function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let sortObj1 = {};
    let sortObj2 = {};

    for (let i = 0; i < str1.length; i++) {
        let el = str1[i];
        if (sortObj1[el]) {
            sortObj1[el]++;
        } else sortObj1[el] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let el = str2[i];
        if (sortObj2[el]) {
            sortObj2[el]++;
        } else sortObj2[el] = 1;
    }

    for (let idx in sortObj1) {
        if (sortObj1[idx] !== sortObj2[idx]) return false;
    }

    return true;
}

console.log(isAnagram("шапрекерта", "керташапре"));
console.log(isAnagram("орпавгнеку", "проавенгку"));
console.log(isAnagram("екрпот", "мвепер"));
console.log(isAnagram("екрпот", "мвеперавав"));
