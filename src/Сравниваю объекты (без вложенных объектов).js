function isEqual(object1, object2) {
    const array1 = Object.getOwnPropertyNames(object1);
    const array2 = Object.getOwnPropertyNames(object2);

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i += 1) {
        const arrayElem = array1[i];

        if (object1[arrayElem] !== object2[arrayElem]) {
            return false;
        }
    }

    return true;
}

const object1 = {
    name: "paranet",
    id: 1,
};

const object2 = {
    id: 1,
    name: "paranet",
};

console.log(isEqual(object1, object2));
