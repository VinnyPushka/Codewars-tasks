function myFunc(callback) {
    const a = [4, 5, 6];
    let element = document.querySelector(`.out-1`);
    callback(element, a);
}

function out1(elem, arr) {
    elem.innerHTML = arr.join(".");
}

function out2(elem, arr) {
    elem.innerHTML = arr.join("-");
}

myFunc(out2);
myFunc(out1);
