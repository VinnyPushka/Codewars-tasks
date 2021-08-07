const array = ['a', 'b', 'c', 'a', 'a', 'b'];
array.forEach((item, i, array) => {if (array[i]=="a") array[i]="b"});
console.log(array)