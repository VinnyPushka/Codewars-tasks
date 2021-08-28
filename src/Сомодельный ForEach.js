Array.prototype.forEach2 = function (func, thisArg) {
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if (i in this) {
            func.call(this.Arg, this[i], this);
        }
    }
};
