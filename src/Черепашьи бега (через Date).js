function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    }
    var time = new Date((g / (v2 - v1)) * 3600 * 1000);
    return [time.getHours(), time.getMinutes(), time.getSeconds()];
}
console.log(race(750, 850, 70));
