// function parseJson(str) {
//     return new Promise((res, rej) => {
//         try {
//             const result = JSON.parse(str);
//             res(result);
//         } catch (error) {
//             console.log(error);
//             rej(error);
//         }
//     });
// }
// const str1 = "fdskj lskjfsj";

// let a = parseJson(str1);

// a.then((arg) => console.log(arg));

function parseJson(str) {
    return new Promise((resolve, reject) => {
        try {
            let result = JSON.parse(str);
            resolve(result);
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

parseJson("fdfsdf dfs").catch((err) => console.log("ошибочка вышла"));
