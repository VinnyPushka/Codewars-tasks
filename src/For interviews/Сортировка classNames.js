let classNames = [
    "header",
    "menu",
    "menu-item",
    "menu-item",
    "menu-item",
    "footer",
    "menu",
    "link",
    "link",
    "link",
    "link",
];

let obj = {};

for (const className of classNames) {
    obj[className] ? obj[className]++ : (obj[className] = 1);
}

let result = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

console.log(result);
