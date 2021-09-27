const maxDistToClosest = function (seats) {
    let max = 0;
    let count = 0;
    let i = 0;

    if (seats[i] === 0) {
        while (seats[i] === 0) {
            i++;
            count += 1;
        }
        max = count;
        count = 0;
    }

    for (; i < seats.length; i++) {
        let cur = seats[i];

        if (cur === 1) {
            count = 0;
        } else {
            i === seats.length - 1
                ? (max = Math.max(max, ++count))
                : (max = Math.max(max, Math.ceil(++count / 2)));
        }
    }

    return max;
};

const input1 = [1, 0, 0, 0, 1, 0, 1];
const input2 = [0, 0, 0, 1];
const input3 = [1, 1, 1, 0];
const input4 = [1, 1, 1, 1];

console.log(maxDistToClosest(input1));
console.log(maxDistToClosest(input2));
console.log(maxDistToClosest(input3));
console.log(maxDistToClosest(input4));
