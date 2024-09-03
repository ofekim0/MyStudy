// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = Infinity;
let num5 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = 'hello';
let str3 = `hello`;
let str4 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// number 타입에 임시로 null을 적용시키기 위해서는 tsconfig.json의 strictNullCheck을 false로
// let numA: number = null;
// 리터럴 타입 : 타입을 값 그 자체로 정의하는 유형
let numA = 10;
// numA = 12; -> 10이라는 타입을 만든것이므로 다른 값으로 변경 불가
let strA = "hello";
export {};
