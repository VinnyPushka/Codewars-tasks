function createPromuise(value, delay, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            error ? reject(error) : resolve(value);
        }, delay);
    });
}

const p1 = createPromuise(1, 250);
const p2 = createPromuise(2, 700);
const p3 = createPromuise(3, 150, "Some error");

async function startAll() {
    //! await пока все промисы не будут выполнены, промисы передаем в виде массива промисов
    const res = await Promise.all([p1, p2, p3]);
    res;
}

async function startAny() {
    //! await пока хотя бы один из переданных в массиве промисов не будет выполнен
    const res = await Promise.any([p1, p2, p3]);
    //! .race - вернет первый выполнившийся промис с его результатом: resolve или reject.
    //! .any - игнорирует все результаты с reject, и вернет:
    //? 1) В случае хотябы одного успешно выполневшегося промиса - resolve этого первого успешно выполневшегося промиса.
    //? 2) В случае всех промисов со статусом reject - вернет либо массив с ошибками этих промисов, либо одну ошибку типа ошибки промиса)
    res;
}

async function startAnyError() {
    try {
        const res = await Promise.any([p3, p2]);
        res;
    } catch (e) {
        console.log(e);
        console.log(e.error);
    }
}

startAll();
startAny();
startAnyError();
