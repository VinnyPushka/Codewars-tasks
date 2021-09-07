/* В Функцию передается дистанция, которую нужно проехать,
вторым параметром передается дистанция после которой необходимо сделать остановку.
Необходимо вывести лог всего пути внутри функции, как в примере.
*/

function realizeDistance(distance, stopAfter) {
    let count = 0;
    let answer = "";
    while (distance) {
        if (distance > stopAfter) {
            distance -= stopAfter;
            answer += `Остановка №${++count}. Вы проехали ${
                stopAfter * count
            } метров. \n`;
        }
        if (distance <= stopAfter) {
            answer += `Вы проехали${
                count === 0 ? " " : " еще "
            }${distance} метров и доехали до точки.`;
            return answer;
        }
    }
}

//Вы проехали 100 метров и доухелаи до точки.
console.log(realizeDistance(100, 150));

/*
Остановка №1. Вы проехали 300 метров.
Остановка №2. Вы проехали 600 метров.
Остановка №3. Вы проехали 900 метров.
Вы проехали еще 100 метров и доехали до точки.
*/
console.log(realizeDistance(900, 300));
