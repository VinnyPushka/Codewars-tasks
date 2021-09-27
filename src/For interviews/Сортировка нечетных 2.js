function oddSort(arr) {
    arr.forEach((item, index) => {
        if (item % 2 === 1) {
            let sortNumber = item;

            for (let i = 0; i < index; i++) {
                if (arr[i] % 2 === 1) {
                    if (arr[i] > sortNumber) {
                        const tmp = sortNumber;

                        sortNumber = arr[i];
                        arr[i] = tmp;
                    }
                }
            }
            arr[index] = sortNumber;
        }
    });

    return arr;
}

console.log(oddSort([7, 3, 4, 9, 5, 2, 17]));
