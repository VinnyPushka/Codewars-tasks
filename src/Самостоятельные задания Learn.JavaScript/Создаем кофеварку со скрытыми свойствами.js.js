class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        this._waterAmount = value;
    }
    get waterAmount() {
        return this._waterAmount;
    }
    constructor(power) {
        this._power = power;
    }

    getPower() {
        return this._power;
    }
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10;
