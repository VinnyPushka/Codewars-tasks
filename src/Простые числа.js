function isPrime1(num) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        count++;
        if (num % i === 0) return false;
    }
    console.log(count);

    return num > 1;
}

console.log(isPrime1(109));

function isPrime2(n) {
    let count = 0;
    if (n % 2 === 0) return false;
    for (let i = 3; i < Math.sqrt(n); i += 2) {
        count++;
        if (n % i === 0) return false;
    }
    console.log(count);
    return true;
}

console.log(isPrime2(109));

function getPrimes(number) {
    const res = [];
    for (let i = 2; i <= number; i++) {
        if (isPrime1(i)) res.push(i);
    }
    return res;
}

console.log(getPrimes(125));

//! Решето Эротосфена

function erotosfenFunc(num) {
    const array = [];
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (!array[i]) {
            primes.push(i);
            for (let j = i * i; j <= num; j += i) {
                array[j] = true;
            }
        }
    }
    return primes;
}

console.log(erotosfenFunc(125));
