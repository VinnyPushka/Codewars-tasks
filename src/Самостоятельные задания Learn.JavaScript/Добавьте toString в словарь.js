// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        },
    },
});

//! делает вот это:

let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
    value: function () {
        return Object.keys(this).join();
    },
    writable: true, //! enumerable: false (по умолчанию), поэтому не попадает в перебор
    configurable: true,
});

alert(dictionary);
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
/* for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}
*/
// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__"
