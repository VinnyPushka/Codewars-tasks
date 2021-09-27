for (let i = 1; i <= 4; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
//! =================================
var i = 0;
while (i < 4) {
    i++;
    let a = function (i) {
        setTimeout(() => console.log(i), i * 1000);
    };
    a(i);
}
//! ==================================
var i = 0;
while (i < 4) {
    i++;
    setTimeout(
        (i) => {
            console.log(i);
        },
        i * 1000,
        i
    );
}
