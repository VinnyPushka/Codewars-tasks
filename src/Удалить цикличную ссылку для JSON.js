/* В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. 
Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
*/
let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
    JSON.stringify(meetup, function replacer(key, value) {
        return key != "" && value == "meetup" ? undefined : value;
        /* ваш код */
    })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

const room = {
    number: 23,
};

const meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
    JSON.stringify(
        meetup,
        (key, value) => {
            if (key === "self" || (key === "occupiedBy" && value === meetup))
                return undefined;
            return value;
        },
        2
    )
);
