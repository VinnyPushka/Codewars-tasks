// Получить случайное число от 0 до size-1
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
console.log(1);

// Вычислить расстояние от клика (event) до клада (target)
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
};

// Получить для расстояния строку подсказки
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "ты горишь!";
    } else if (distance < 20) {
        return "ппц горячо-горячо!";
    } else if (distance < 40) {
        return "Очень горячо";
    } else if (distance < 80) {
        return "Горяченько";
    } else if (distance < 120) {
        return "Тепло";
    } else if (distance < 170) {
        return "Холодно чот";
    } else if (distance < 330) {
        return "Очень холодно...";
    } else {
        return "Ты сейчас от холода умрешь!";
    }
};

// Создаем переменные
let clicks = 0;
let width = document.getElementById("map").width;
let height = document.getElementById("map").height;

// Случайная позиция клада
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};

// Добавляем элементу img обработчик клика
document.querySelector("#map").onclick = function (event) {
    clicks++;
    console.log(2);
    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);

    // Преобразуем расстояние в подсказку
    let distanceHint = getDistanceHint(distance);

    // Записываем в элемент #distance новую подсказку
    document.getElementById("distance").textContent = distanceHint;

    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
};

console.log(target);
