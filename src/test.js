var obj = {
    fn1: function () {
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    },
};

var fn1 = obj.fn1;
var fn2 = obj.fn2;

obj.fn1(); //
obj.fn2(); //

fn1(); //
fn2(); //
