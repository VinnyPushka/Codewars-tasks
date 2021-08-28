//? По пачке билетов нужно вычислить город назначения в маршруте и вернуть всё путешествие, например:

const arr = [
    ["CEB", "TAC"], //3
    ["TAC", "BOR"], //1
    ["TAG", "CEB"], //2 //
    ["MNL", "TAG"], //4
]; //'MNL, TAG, CEB, TAC, BOR'

function trip(tickets) {
    let path = [];
    let counter = 0;
    for (let ticket of tickets) {
        for (let i = 0; i < tickets.length; i++) {
            if (ticket[0] == tickets[i][1]) counter++;
        }
        if (counter < 1) {
            path = tickets.splice(tickets.indexOf(ticket), 1);
            path = [path[0][0], path[0][1]];
        } else counter = 0;
    }

    for (let ticket of tickets) {
        for (ticket of tickets) {
            if (path[path.length - 1] == ticket[0]) {
                path.push(ticket[1]);
            }
        }
    }
    return path;
}

console.log(trip(arr));
