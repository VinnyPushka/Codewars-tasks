function isEqual(object1, object2) {
    const Array1 = Object.getOwnPropertyNames(object1);
    const Array2 = Object.getOwnPropertyNames(object2);

    if (Array1.length !== Array2.length) {
        return false;
    }

    for (let i = 0; i < Array1.length; i += 1) {
        const arrayElem = Array1[i];
        const areObj =
            typeof object1[arrayElem] === "object" &&
            typeof object2[arrayElem] === "object";

        if (
            (!areObj && object1[arrayElem] !== object2[arrayElem]) ||
            (areObj && !isEqual(object1[arrayElem], object2[arrayElem]))
        ) {
            return false;
        }
    }

    return true;
}

const object1 = {
    name: "paranet",
    id: 1,
    price: {
        a: 200,
        b: 250,
    },
};

const object2 = {
    id: 1,
    price: {
        b: 250,
        a: 200,
    },
    name: "paranet",
};

console.log(isEqual(object1, object2));
