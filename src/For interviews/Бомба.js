function Bomb(mes, delay) {
    this.mes = mes;

    setTimeout(this.blow.bind(this), delay * 1000);
}

Bomb.prototype.blow = function () {
    console.log(this.mes);
};

new Bomb("boom", 2);
