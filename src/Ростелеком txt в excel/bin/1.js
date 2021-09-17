function readFile(file) {
    return new Promise((resolve, reject) => {
        let fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result);
        };
        fr.onerror = reject;
        fr.readAsText(file, "Windows-1251");
    });
}

async function procFile() {
    let str;
    try {
        let file = document.getElementById("fileInput").files[0];
        str = await readFile(file);
        mutate(str);
    } catch (err) {
        console.log(err);
    }
}

function mutate(text) {
    let res = [];

    let array = text
        .replace(
            "------ -------------------------------------------------------------- -------- --------",
            ""
        )
        .replaceAll("\r", "")
        .split("--------")
        .slice(1);

    let res2 = [];

    let newArray = array.map((item) => {
        if (item.startsWith(`\n\"4212`)) {
            return item.slice(6, 12);
        } else if (item.startsWith("\n4212")) {
            return item.slice(5, 11);
        } else if (item.startsWith(`\n`)) {
            return item.slice(1);
        }
        return item;
    });

    filtredArray = newArray.filter(
        (item) =>
            item !== `------ ` &&
            item !== " " &&
            item !== "" &&
            item !== `--\n` &&
            item !== "--"
    );

    filtredArray.forEach((elem) => {
        if (elem.includes("\n")) {
            let current = elem.split("\n");
            for (let i = 0; i < current.length; i++) {
                res.push(current[i]);
            }
        } else res.push(elem);
    });

    for (let i = 0; i < res.length; i++) {
        if (res[i].includes("Телефон")) {
            res.splice(i, 2);
        }
    }

    for (let elem of res) {
        if (elem.length > 6) {
            res2.push(elem.split("     "));
        } else {
            res2.push(elem);
        }
    }

    for (elem of res2) {
        for (let i = 0; i < elem.length; i++) {
            if (elem[i] === "") {
                elem.splice(i, 1);
                i--;
            }
        }
    }

    let newRes = res2.map(function (item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                if (item[i].startsWith(`  `)) item[i] = item[i].slice(2);
                if (item[i].startsWith(` `)) item[i] = item[i].slice(1);
            }
            return item;
        }
        return item;
    });

    for (let i = 0; i < newRes.length; i++) {
        if (typeof newRes[i] === "string") {
            let j = i + 1;
            while (Array.isArray(newRes[j])) {
                newRes[j].unshift(newRes[i]);
                j += 1;
            }
            newRes.splice(i, 1);
        }
    }

    for (let elem of newRes) {
        elem[1] = elem[1].split(" ");
        elem.push(elem[1][0]);
        elem.push(elem[1][1]);
        elem[1].splice(0, 2);
        elem[1] = elem[1][0];
        elem[3] = elem[3].replace(".", ",");
        elem[4] = elem[4].replace(".", ",");
        [elem[3], elem[4], elem[5], elem[6]] = [
            elem[5],
            elem[6],
            elem[3],
            elem[4],
        ];
        elem.splice(0, 0, " ", " ");
        elem.splice(3, 0, " ", " ");
        elem.splice(7, 0, " ");
        elem.splice(10, 0, " ", "0");
        let elemArr = elem[8].split("/");
        [elemArr[0], elemArr[1], elemArr[2]] = [
            elemArr[2],
            elemArr[1],
            elemArr[0],
        ];
        elemArr[2] = "20" + elemArr[2];
        elem[8] = elemArr.join(".");
    }

    let month = getNameDate(newRes[5][8]);

    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "SheetJS",
        Subject: "Test file",
        Author: "Dimka",
        CreatedDate: new Date(),
    };

    wb.SheetNames.push("Test Sheet");
    var ws_data = newRes;
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;

    var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
    }
    let a = document.getElementById("button-a");
    let b = a.addEventListener("click", function () {
        saveAs(
            new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
            `Ростелеком ${month}.xlsx`
        );
    });
}

function getNameDate(date) {
    let options = {
        month: "long",
        year: "numeric",
    };
    let locale = "ru-Ru";

    let date1 = date.split(".");
    [date1[0], date1[1]] = [date1[1], date1[0]];
    let date2 = date1.join(".");

    let c = new Date(date2).toLocaleString(locale, options);
    return c;
}
