//? Object ========================================================
const person = {
    name: `Dima`,
    age: 30,
    job: "noone",
};

const op = new Proxy(person, {
    //! второй параметр - методы для ловушки
    get(target, prop) {
        // console.log(`Getting prop ${prop}`);
        if (!(prop in target)) {
            return prop
                .split("_")
                .map((p) => target[p])
                .join(" ");
        }
        return target[prop];
    },

    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`);
        }
    },

    has(target, prop) {
        return ["age", "name", "job"].includes(prop);
    },

    deleteProperty(target, prop) {
        console.log("deleting...", prop);
        delete target[prop];
        return true;
    },
}); //! первый параметр - цель на которую хотим повесить Proxy

//? Funcions ========================================================

const log = (text) => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        //! это вызов функции, поэтому нужно что то вернуть
        //! Цель прокси, контекст, все параметры, передаваемые в функцию
        console.log("Calling fn...");
        return target.apply(thisArg, args).toUpperCase(); //! должны вернуть результат выполнения функции
    },
});

//? Classes =========================================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log("Construct...");

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop "${prop}"`);
                return t[prop];
            },
        });
    },
});

const p = new PersonProxy("Maxim", 30);
