function oddSort(arr) {
    let sortedOddArray = arr.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
    console.log(sortedOddArray);

    let array = [];

    arr.forEach((x, idx) => {
        if (!sortedOddArray.includes(x)) array.push([x, idx]);
    });

    for (let i = 0; i < array.length; i++) {
        sortedOddArray.splice(array[i][1], 0, array[i][0]);
    }

    return sortedOddArray;
}

console.log(oddSort([7, 3, 4, 9, 5, 2, 17])); // => [3, 5, 4, 7, 9, 2, 17]

// oddSort([7, 3, 4, 9, 5, 2, 17])
