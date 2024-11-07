//Sử dụng ES6 ( arrow function, fitter)
//1. Viết hàm kiểm tra 1 số có phải là số nguyên tố không

let isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(5));

//2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primeNumbers = arr.filter(n => isPrime(n));
console.log(primeNumbers);