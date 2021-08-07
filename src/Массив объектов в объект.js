const arr = [
    { name: "a", value: 1 },
    { name: "b", value: 2 },
];
const obj = {};
for (i of arr) obj[i.name] = i.value;

console.log(obj);
