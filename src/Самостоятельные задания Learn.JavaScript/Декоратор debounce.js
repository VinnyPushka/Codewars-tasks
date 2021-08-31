//? Результатом декоратора debounce(f, ms) должна быть обёртка,
//? которая передаёт вызов f не более одного раза в ms миллисекунд.
//? Другими словами, когда мы вызываем debounce, это гарантирует,
//? что все остальные вызовы будут игнорироваться в течение ms.
/* На практике debounce полезен для функций, 
которые получают/обновляют данные, и мы знаем, 
что повторный вызов в течение короткого промежутка времени не даст ничего нового.
Так что лучше не тратить на него ресурсы.
*/

function debounce(f, ms) {
    onCoolDown = false; //! Вводим переменную для КД.
    return function () {
        if (onCoolDown) return; //! Если в КД, то просто возвращаемся из функции

        f.aplly(this, arguments); //! запускаем нашу функцию, передавая ей this и arg.

        onCoolDown = true; //! Включаем КД

        setTimeout(() => (onCoolDown = false), ms); //! Выключаем КД по таймеру
    };
}

/* Вызов debounce возвращает обёртку. Возможны два состояния:
  
  isCooldown = false – готова к выполнению.
  isCooldown = true – ожидание окончания тайм-аута.
  В первом вызове isCoolDown = false, поэтому вызов продолжается, и состояние изменяется на true.
  
  Пока isCoolDown имеет значение true, все остальные вызовы игнорируются.
  
  Затем setTimeout устанавливает его в false после заданной задержки
  */
