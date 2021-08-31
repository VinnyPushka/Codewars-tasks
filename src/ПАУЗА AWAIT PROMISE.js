function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

async function asyncExample() {
    try {
        await delay(3000);
        const data = await getData();
        console.log("Data", data);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("как-то закончили");
    }
}
