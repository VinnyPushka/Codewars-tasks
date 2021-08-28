console.log(`Request data...`);

//! Callbacks
// setTimeout(() => {
//     console.log(`Preparing data...`);

//     const backendData = {
//         server: "aws",
//         port: 2000,
//         status: `working`,
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log(`Data receved:`, backendData);
//     }, 2000);
// }, 2000);

//! Promise

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //! Некоторая асинхронная операция
        console.log(`Preparing data...`);
        const backendData = {
            server: "aws",
            port: 2000,
            status: `working`,
        }; //? Чтобы получить доступ к данным backendData, передадим ее в resolve
        resolve(backendData); //? Говорим Промису, что он завершился (после получения данных)
    }, 2000);
});

p.then((data) => {
    //! data - это то, что мы передали в resolve в Промисе
    //? Что сделать после завершения Промиса
    return new Promise((resolve, reject) => {
        //! p.then возвращает новый Промис, поэтому можно сразу написать .then
        //? Новый промис для асинхронной операции с полученными данными
        setTimeout(() => {
            //! Некоторая асинхронная операция
            data.modified = true;
            resolve(data);
        }, 2000);
    });
})
    .then((clientData) => {
        //! Обрабатывыем данные, полученные в resolve
        clientData.fromPromise = true;
        return clientData; //! Возвращаем изменненные данные
    })
    .then((data) => {
        //! Без нового промиса вызываем измененные данные
        console.log(`Modified data:`, data);
    })

    //! В случае ошибки, переданной в reject(), вызывается catch
    .catch((err) => console.error("Error:", err))

    //! Будет после всего в любом случае (успешная обработка данных или ошибка reject)
    .finally(() => console.log("Finally"));
