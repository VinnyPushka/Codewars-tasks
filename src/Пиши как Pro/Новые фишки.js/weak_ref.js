//! Так было (если нам все равно на количество записей в памяти, на обект есть ссылки, поэтому объект всегда в памяти)
// function func() {
//     const person = {
//         name: "Dima",
//     };

//     console.log(person.name);
// }

// async function start() {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(func());
//         }, 300);
//     });

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(func());
//         }, 700);
//     });
// }

// start();

//! Стало:

function func() {
    //! WeakRef - слабая ссылка (удаляется из памяти)
    const person = new WeakRef({
        name: "Dima",
    });

    console.log(person.deref().name); //! Обращение к слабой ссылке
}

async function start() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(func());
        }, 300);
    });

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(func());
        }, 700);
    });
}

start();

//! Пример

const registry = new FinalizationRegistry((value) => {
    console.log("Clearing garbage", value);
});

const listenerRegistry = new FinalizationRegistry(
    ({ target, wrapper, type }) => {
        target.removeEventListener(type, wrapper);
    }
);
function addWeakListener(target, type, listener) {
    const wr = new WeakRef(listener);
    const wrapper = (event) => wr.deref()?.(event);
    listenerRegistry.register(listener, { target, wrapper, type });
    target.addEventListener(type, wrapper);
}

addWeakListener(document, "click", (event) => {
    console.log(event);
});
