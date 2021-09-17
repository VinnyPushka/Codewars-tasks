const concerts = {
    Москва: new Date("2020-04-01"),
    Казань: new Date("2021-09-18"),
    Владивосток: new Date("2020-04-21"),
    Калининград: new Date("2021-09-17"),
    Омск: new Date("2020-04-18"),
    Питер: new Date("2021-09-16"),
};

function ObjToArray(obj) {
    return Object.getOwnPropertyNames(obj)
        .filter((item) => obj[item] > new Date())
        .sort((a, b) => obj[a] - obj[b]);
}
console.log(ObjToArray(concerts));
