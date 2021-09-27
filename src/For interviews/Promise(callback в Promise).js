// const printSec = (number, callback) => {
//     setTimeout(() => {
//         console.log(`${number} sec`);
//         callback();
//     }, 1000);
// };
// printSec(1, () => {
//     printSec(2, () => {
//         printSec(3, () => {});
//     });
// });

const printSec = function (number) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`${number} sec`);
            resolve();
        }, 1000)
    );
};

printSec(1)
    .then(() => printSec(2))
    .then(() => printSec(3));
