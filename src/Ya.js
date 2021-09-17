// ({
//     method: function() {
//         (
//             function() {
//                 alert(this);
//             }
//         )();
//     }
// }).method();

var obj = {
    fn1: function () {
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    },
};

var fn1 = obj.fn1;
var fn2 = obj.fn2;

obj.fn1(); //
obj.fn2(); //

fn1(); //
fn2(); //

// // ----------------

// new Promise((resolve, reject) => {
//   throw new Error('error');
//   reject(new Error('error'));
// }).then(console.log).catch(console.error)

// try {
//     setTimeout(() => {
//         throw new Error('error');
//     }, 1000);
// } catch (err) {
//     console.error(err);
// }

// function a() {
//     throw new Error('error');
// }

// promise.then(a, b);
// promise.then(a).catch(b);

// JSON.parse("false") // -> false
// JSON.parse('{"foo":"bar"}') // -> {"foo":"bar"}

// parseJson('{"foo":"bar"}')
//   .then(console.log)
//   .catch(console.error);

// function parseJson(str) {
//     return Promise ((resolve, reject) =>
//     (JSON.parse(str)) ? resolve(JSON.parse(str)) : reject()))
// }

// //! ГЛЯНУТЬ

// // function parseJson(str) {
// //     return new Promise((res, rej) => {
// //         try {
// //               const result = JSON.parse(str);
// //               res(result)
// //         } catch (error ) {
// //               rej(error)
// //         }
// //     }
// // }

// .catch ((e)=>console.log(e)

// // ------------------

// /**
//  * Дана строка, состоящая из букв A-Z:
//  * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
//  * Нужно написать функцию RLE, которая на выходе даст строку вида:
//  * "A4B3C2XYZD4E3F3A6B28"
//  *
//  * Пояснения:
//  * 1. Если символ встречается 1 раз, он остается без изменений
//  * 2. Если символ повторяется более 1 раза, к нему добавляется количество повторений
//  */

// function rle(str) {
//    let answer = [];
//    let elem = str[0];
//    let start = 0;

//    str[str.lenght] // undefined
//    str[str.lenght + 1] // undefined
//    for (let i = 1; i <= str.length; i++) {
//        if (str[i] !== elem) {
//           answer.push(elem);
//           elem = str[i];
//           if (i - start > 1) {
//             aswer.push(i - start)
//           }
//         start = i;
//         }
//     }
// }

// // -----------------

// // Что будет в консоли после выполнения фрагмента кода?

// var i = 10;
// var array = [];

// while (i--) {
//     array.push(function() {
//         return i + i;
//     });
// }

// console.log([
//     array[0](), // ??? 18
//     array[1](), // ???
// ])
