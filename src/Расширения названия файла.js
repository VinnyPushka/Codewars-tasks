// const getExt = (filename) => {
//     return filename.split(".")[filename.split(".").length - 1];
// };
const getExt = (filename) => {
    let arr = filename.split(".");
    return arr[arr.length - 1];
};

console.log(getExt("fdlfkd.fdfs.asdasr.exe"));
