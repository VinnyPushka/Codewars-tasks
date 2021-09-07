const users = {
    ivanov: {
        age: 25,
        parent: {
            "ivanov-a": {
                age: 45,
            },
            "ivanov-b": {
                age: 43,
                parent: {
                    "sergeev-a": {
                        age: 88,
                        parent: {
                            lionenko: {},
                        },
                    },
                },
            },
        },
    },
    kostenko: {
        age: 56,
        parent: {
            ignatenko: {},
            sniezko: {
                age: 45,
            },
        },
    },
};

function userParentRecursion(obj) {
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            console.log(key);
            userParentRecursion(obj.parent[key]);
        }
    }
}

function check(oobbjj) {
    for (let i in oobbjj) {
        userParentRecursion(oobbjj[i]);
    }
}

check(users);
