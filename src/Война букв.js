function AlphabetWar(fight) {
    var LeftSide = 0;
    var RightSide = 0;
    for (i = 0; i < fight.length; i++) {
        if (fight[i] == "w") {
            LeftSide += 4;
        }
        if (fight[i] == "p") {
            LeftSide += 3;
        }
        if (fight[i] == "b") {
            LeftSide += 2;
        }
        if (fight[i] == "s") {
            LeftSide += 1;
        }
        if (fight[i] == "m") {
            RightSide += 4;
        }
        if (fight[i] == "q") {
            RightSide += 3;
        }
        if (fight[i] == "d") {
            RightSide += 2;
        }
        if (fight[i] == "z") {
            RightSide += 1;
        }
    }
    if (LeftSide > RightSide) {
        return "Left side wins!";
    }
    if (LeftSide < RightSide) {
        return "Right side wins!";
    }
    if (LeftSide == RightSide) {
        return "Let's fight again!";
    }
}
