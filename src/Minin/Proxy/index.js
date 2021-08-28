//! Proxy отличается от Get-еров и Set-еров:
// Отличается тем, что в прокси реализовано много "ловушек" которые позволяют,
// не только устанавливать и получать значение, а отслеживать удаление,
// проверку на наличие, итерации и.т.п так же,
// прокси позволяют использовать ловушки для классов и функций.

// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        //! возвращает прокси с параметром (таргет - наш объект) и
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
    }); //! если вызвать имеющиеся свойства - то всё ок, если выйзвать свойство которого нет -
    //! то выведет дефолтное значение defaultValue = 0
};

const position = withDefaultValue(
    {
        x: 24,
        y: 42,
    },
    0
);

// Hidden properies
const withHiddenProps = (target, prefix = "_") => {
    return new Proxy(target, {
        //! проверяем есть ли поле в объекте и проверяем не начинается ли он с префикса prefix
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: (obj) =>
            //! ownKeys возвращает массив ключей, отфильтруем его, чтобы в него не попадали те, что начинаются с prefix
            Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0), //! объект, свойство, ресивер - это объект (сам Proxy)
        //! При запросах определенных свойств - если свойство содержится в объекта obj, то отобразим его, если его нет, то вернем undefined (void 0)
    });
};

const data = withHiddenProps({
    name: "Vladilen",
    age: 25,
    _uid: "1231231",
});

// Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {};
        args.forEach((item) => (index[item.id] = item));

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case "push":
                        return (item) => {
                            index[item.id] = item;
                            arr[prop].call(arr, item);
                        };
                    case "findById":
                        return (id) => index[id];
                    default:
                        return arr[prop];
                }
            },
        });
    },
});

const users = new IndexedArray([
    { id: 11, name: "Vladilen", job: "Fullstack", age: 25 },
    { id: 22, name: "Elena", job: "Student", age: 22 },
    { id: 33, name: "Victor", job: "Backend", age: 23 },
    { id: 44, name: "Vasilisa", job: "Teacher", age: 24 },
]);
