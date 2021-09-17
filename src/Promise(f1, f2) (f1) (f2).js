const ex = true;
const f1 = (ex) => consoler.log(ex);
const f2 = (error) => console.log(error);
new Promise((resolve, reject) => {
    if (ex) {
        resolve("все отлично");
    } else reject("плохи дела");
}).then(f1, f2);

// .then(f1)
// .catch(f2);
