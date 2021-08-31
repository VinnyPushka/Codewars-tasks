const arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
arrLength = arr.map(function (item) {
    return item.length;
});

console.log(arrLength); // 4,5,2,5
