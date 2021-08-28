console.log(`Request data...`);
const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
};

Promise.all([sleep(2000), sleep(5000)]).then(() =>
    //! Выведет сообщение после того, как все промисы будут выполнены
    console.log(`All promises done`)
);

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    //! Выведет сообщение после того как любой из промисов будет выполнен
    console.log(`Race promises`);
});
