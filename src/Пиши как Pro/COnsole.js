function check(light) {
    if (light) {
        if (light === "red") {
            console.log("Stop!");
        } else if (light === "yellow") {
            console.log("Ready!");
        } else {
            console.log("Go!");
        }
    } else {
        console.log("Не цвет!");
    }
}

function getLight(light) {
    if (!light) {
        return "Не цвет!";
    }
    if (light === "red") {
        return "Stop!";
    }
    if (light === "yellow") {
        return "Ready!";
    }
    return "Go!";
}

getLight(""); //?
