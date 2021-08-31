/* Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика,
можно воспользоваться как замыканием, так и свойством функции. 
Или сделать два варианта решения: и так, и так.
*/

function makeCounter() {
    function counter() {
        return count++;
    }
    counter.count = 0;

    counter.set = function (newCount) {
        counter.count = newCount;
    };

    counter.decrease = () => counter.count--;

    return counter;
}

let counter = makeCounter();
/* 
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  alert( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  alert( counter() ); // 10 (вместо 11)
  */
counter.set(5);
counter.decrease();
console.log(counter.count);
