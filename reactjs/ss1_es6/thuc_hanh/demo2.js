//defaut param : gii tri mac dinh cho tham so
// const sum = (a = 1, b = 2) => a+b;
//
// console.log(sum(3, 4));
// console.log(sum(3));

//destructuring: phân rã mang
//lay 2 phan tu dau tien cua mang
// let mang = [1, 2, 3, 4, 5];
// const [a,b] = mang;
// console.log(a);
// console.log(b);

//lay 2 phan tu cuoi cung cua mang
// const [a,b, ...rest] = mang;
// console.log(rest)
//
// let student = {
//     id: 1,
//     name: 'Nguyen Van A',
// }
// const {name,id} = student;
// console.log(name);
// console.log(id);

//rest parameter
// const sum = (...rest) => {
//     let tong = 0;
//     for (let i = 0; i < rest.length; i++) {
//         tong += rest[i];
//     }
//     return tong;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

//spread operator
// let mang1 = [1, 2, 3];
// let mang2 = [4, 5, 6];
// let mang3 = [...mang1, ...mang2];
// console.log(mang3);

//them thuoc tinh choo 1 object
// let student = {
//     id: 1,
//     name: 'Nguyen Van A',
// }
// student = {...student, age: 20};
// console.log(student);