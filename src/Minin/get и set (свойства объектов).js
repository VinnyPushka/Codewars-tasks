const person = Object.create(
    {
        //! В первом параметре мы указываем прототив (prototype) нового объекта person
        calculateAge() {
            return new Date().getFullYear() - this.birthYear;
        },
    },
    {
        name: {
            value: `Dimka`,
            enumerable: true, //! свойство "Перечисляемый" - отображается ли при переборах (for)
            writable: true, //! свойство "Переписываемый" - по умолчанию false
            configurable: true, //! свойство "Удаляемый"
        },
        birthYear: {
            value: 1990,
            enumerable: false,
            writable: false,
            configurable: false,
        },
        age: {
            get() {
                //! Если запрашиваем age, то покажет:
                return new Date().getFullYear() - this.birthYear;
            },
            set(value) {
                //! Если пытаемся присвоить age какое-то значение, то делаем это:
                document.body.style.background = "red";
                console.log("Set age", value);
            },
        },
    }
);

for (let key in person) {
    //! Проходит так же по прототипу объекта
    //! Поэтому сделаем проверку на то, чтобы поля принадлежали именно объекту
    if (person.hasOwnProperty(key)) {
        console.log("key", key, person[key]);
    }
}
