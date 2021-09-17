console.log("Request data...");

// setTimeout(() => {
//     console.log("Preparing data...");

//     const backendData = {
//         server: "aws",
//         posrt: 8080,
//         status: "working",
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("Data reveiver", backendData);
//     }, 2000);
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Preparing data...");
//         const backendData = {
//             server: "aws",
//             posrt: 8080,
//             status: "working",
//         };
//         resolve(backendData);
//     }, 2000);
// });

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000);
//     });
// })
//     .then((clientData) => {
//         clientData.fromPromise = true;
//         return clientData;
//     })
//     .then((data) => {
//         console.log("Modified data...");
//         console.log(data);
//     })
//     .catch((err) => console.error("ERROR!:", err))
//     .finally(() => console.log("We did it!"));

function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

sleep(3000).then(() => console.log("qq after 3 sec!"));
sleep(2000).then(() => console.log("qq after 2 sec!"));
sleep(5000).then(() => console.log("qq after 5 sec!"));

Promise.all([sleep(3000), sleep(2000), sleep(5000)]).then(() =>
    console.log("All promises are done!")
);

// Promise.race([sleep(3000), sleep(2000), sleep(5000)]).then(() =>
//     console.log("First promise is done!")
// );
