console.log('Hello World!');

let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(`array[${i}] = ${array[i]}`);
// }
//foreach để in
//display la callback function: truyền vào 1 function khác
// function display(e, i) {
//     console.log(`array[${i}] = ${e}`);
// }
//
// array.forEach(display);

array.forEach((e, i)=> {
    ++e;
    console.log(`array[${i}] = ${e}`);
});