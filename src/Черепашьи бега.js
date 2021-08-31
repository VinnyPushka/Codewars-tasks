function race(v1, v2, g) {
    let t = g / (v2 - v1);
    let time = [];
    time.push(Math.floor(t));
    time.push(Math.floor((t - time[0]) * 60));
    time.push(Math.floor(((t - time[0]) * 60 - time[1]) * 60));

    return time;
}
console.log(race(720, 850, 70));
