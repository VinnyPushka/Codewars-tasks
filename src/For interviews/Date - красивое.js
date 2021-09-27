const locale = "ko-KR"; //ru-Ru
const options = {
    day: "numeric",
    year: "numeric",
    month: "short", //long
};

const date = new Intl.DateTimeFormat(locale, options).format(); //?
