const array = ['a', 'b', 'c', 'a', 'a', 'b'];
array.forEach(function (item, i, array) {if (item=="a") item="b"});
console.log(array)