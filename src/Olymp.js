function triangle(row) {
    var Final = "";
    while (row.length > 1) {
        for (var i = 0; i < row.length - 1; i++) {
            if (row[i] == row[i + 1]) {
                Final += row[i];
            } else if (
                row[i] + row[i + 1] == "GB" ||
                row[i] + row[i + 1] == "BG"
            ) {
                Final += "R";
            } else if (
                row[i] + row[i + 1] == "RG" ||
                row[i] + row[i + 1] == "GR"
            ) {
                Final += "B";
            } else if (
                row[i] + row[i + 1] == "BR" ||
                row[i] + row[i + 1] == "RB"
            ) {
                Final += "G";
            }
        }
        row = Final;
        Final = "";
    }
    return row;
}
console.log(triangle("GRBGGBRBGGR"));
