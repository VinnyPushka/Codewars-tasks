const delay = (ms) => {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}; //! функция-пауза на ms милисекунд

const url = "https://jsonplaceholder.typicode.com/todos"; //! ссылка на сторонний api

// function fetchTodos() {
//     console.log("Fetch todo started...");
//     return delay(2000)
//         .then(() => fetch(url)) //! возвращаем данные с запроса на сервер (url)
//! fetch нам возвращается response (который передаем в then и обрабатываем)
//         .then((response) => response.json());
// }

// fetchTodos()
//     .then((data) => {
//         console.log("Data:", data);
//     })
//     .catch((e) => console.error(e));

async function fetchAsyncTodos() {
    console.log("Fetch todo started...");
    //! чтобы обработать ошибки как в Promise, возьмем всё, где выполняется await в конструкцию try...catch...
    try {
        await delay(5000); //! код не пойдет дальше, пока не дождемся промиса delay
        const response = await fetch(url); //! в response попадает результат fetch
        //! response.json - тоже ассинхронная функция, так же нужно дождаться с помощью await - результат присвоим в data
        const data = await response.json();
        console.log("Data:", data);
    } catch (e) {
        console.error(e);
    } finally {
        console.log(`Finished`);
    }
}

fetchAsyncTodos(); //! всегда возвращает промис, поэтому мы можем написать .then
//! при вызоове функции и обработать результат последнего await
