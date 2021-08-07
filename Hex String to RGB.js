function hexStringToRGB(hexString) {
    let color = {};
    color.r = parseInt(hexString.slice(1, 3), 16);
    color.g = parseInt(hexString.slice(3, 5), 16);
    color.b = parseInt(hexString.slice(5), 16);
    return color;
}

console.log(hexStringToRGB("#FF9933"));
