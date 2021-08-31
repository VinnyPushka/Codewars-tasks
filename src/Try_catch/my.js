//! try... catch...
//! try... finally...
//! try... catch... finally...

let a = 0;
a = a * 2;
try {
    document.querySelector(".test").innerHTML = a;
} catch (err) {
    console.log("1");
    console.log(err);
} finally {
    console.log("программа работает");
}
console.log(a);

t1();

function t1() {
    console.log("hello");
}
