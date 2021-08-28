async function f1() {
    const res = await fetch("запрос за сервер №1"); // делаем запрос на сервер и ждем его выполнения с помощью await
    return res.text(); //возвращаем результат запроса
}

async function f2() {
    const res = await fetch("запрос за сервер №1"); // делаем запрос на сервер и ждем его выполнения с помощью await
    return res.text(); //возвращаем результат запроса
}

async function f3() {
    const res = await fetch("запрос за сервер №1"); // делаем запрос на сервер и ждем его выполнения с помощью await
    return res.text(); //возвращаем результат запроса
}

async function go() {
    let a = await f1();
    console.log(a);
    let b = await f2();
    console.log(b);
    let c = await f3();
    console.log(c);
}
