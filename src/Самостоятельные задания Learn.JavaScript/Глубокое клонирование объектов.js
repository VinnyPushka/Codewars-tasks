function objectClone(obj) {
    const newObject = {};
    for (let key in obj) {
        if (typeof obj[key] === "object" && Array.isArray(obj[key]) === false) {
            newObject[key] = objectClone(obj[key]);
        }
        newObject[key] = obj[key];
    }
    return newObject;
}
let oldObj = { name: "dana", tap: { mane: "para", gap: 15 }, flas: "gara" };
let object = objectClone(oldObj);
oldObj["tap"]["mane"] = "ytf";
console.log(object);
