//? В каком из массивов содержатся все элементы `третьего` массива?

const suspectObj = {
    James: ["Jacob", "Billy", "Lucas"],
    John: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
};
const deadPpl = ["Lucas", "Billy"];

function compareArrs(targetArr, thirdArr) {
    return thirdArr.every((item) => {
        //! true/false смотря что вернет функция для каждого элемента массива,
        //!проверяем есть ли каждый элемент этого массива в targetArr
        return targetArr.includes(item); //! проверяем есть ли конкретный элемент из thirdArr в targerArr
    });
}

function killer(obj, dead) {
    for (let name in obj) {
        const meetPeople = obj[name];
        if (compareArrs(meetPeople, dead)) {
            return name;
        }
    }
    return false;
}

console.log(killer(suspectObj, deadPpl));
