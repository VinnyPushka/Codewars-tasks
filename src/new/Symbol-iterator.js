let a = {
    from: 1,
    to: 5,
};

a[Symbol.iterator] = function () {
    let current = this.from;
    let finish = this.to;

    return {
        next() {
            if (current <= finish) {
                return {
                    value: current++,
                    done: false,
                };
            } else return { done: true };
        },
    };
};

console.log(...a);
