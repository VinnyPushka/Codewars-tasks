Number.prototype.plus = function (value) {
    return this + value;
};

Number.prototype.minus = function (value) {
    return this - value;
};

console.log((20).plus(5).minus(6));
