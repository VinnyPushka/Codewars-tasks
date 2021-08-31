function likes(names) {
    if (!names[0]) return "no one likes this";
    return names.length == 1
        ? `${names[0]} likes this`
        : names.length == 2
        ? `${names[0]} and ${names[1]} like this`
        : names.length == 3
        ? `${names[0]}, ${names[1]} and ${names[2]} like this`
        : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
/*
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/
