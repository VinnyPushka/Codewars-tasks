function kek(str) {
    const arr = str.split("\n");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];
        let nextLine = arr[i + 1];
        line = line.replace(/\'/g, '"');
        line = line.replace(/\(\((.*)\s(.*)\)\)\s?/g, '<a href="$1">$2</a>');
        if (line.startsWith("= ")) {
            result.push(`<h1>${line.slice(2)}</h1>`);
        } else if (line === "" && nextLine && nextLine.startsWith("* ")) {
            const unorderedList = [];
            while (nextLine !== "") {
                unorderedList.push(nextLine);
                i++;
                nextLine = arr[i + 1];
            }
            const string = `<ul>${unorderedList
                .map((item) => {
                    return `<li>${item.slice(2)}</li>`;
                })
                .join("")}</ul>`;
            result.push(string);
        } else if (line === "") {
            result.push(line);
        } else {
            result.push(`<p>${line}</p>`);
        }
    }
    console.log(result);

    return result.filter((line) => line).join("");
}

console.log(
    kek(`= head

text ((https://ya.ru link)) te'x't

* item
* item
`)
);

module.exports = kek;
