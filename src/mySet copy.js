module.exports = class MySet {
    constructor(value) {
        this.value = [];
        if (Array.isArray(value)) {
            value.forEach((e) => {
                if (!this.value.includes(e)) this.value.push(e);
            });
        } else if (typeof value === 'string') {
            value.split('').forEach((e) => {
                if (!this.value.includes(e)) this.value.push(e);
            });
        }
    }

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    }

    get size() {
        return this.value.length;
    }

    next() {
        if (this.current <= this.value.length - 1) {
            return {
                done: false,
                value: this.value[this.current++],
            };
        } else {
            return { done: true };
        }
    }

    *entries() {
        for (let value of this._items) {
            yield [value, value];
        }
    }

    values() {
        return this.value;
    }

    key() {
        return this.value;
    }

    clear() {
        this.value = [];
    }

    add(a) {
        if (!this.value.includes(a)) this.value.push(a);
        return this;
    }

    delete(a) {
        if (this.value.includes(a)) {
            this.value.splice(this.value.indexOf(a), 1);
            return true;
        } else return false;
    }

    has(a) {
        return this.value.includes(a);
    }

    valueOf() {
        return this;
    }

    toString() {
        return `[object ^_^]`;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return `[object ^_^]`;
        }
    }

    get [Symbol.toStringTag]() {
        return `^_^`;
    }

    getValue() {
        return this.value;
    }

    forEach(cb, thisArg = this) {
        for (let value of this) {
            cb.call(thisArg, value, value, this);
        }
    }
};
