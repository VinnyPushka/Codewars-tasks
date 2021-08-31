function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () =>
        callback(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
}
loadScript(`my2.js`);
