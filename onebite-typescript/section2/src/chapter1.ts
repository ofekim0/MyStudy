// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// number 타입에 임시로 null을 적용시키기 위해서는 tsconfig.json의 strictNullCheck을 false로
// let numA: number = null;

// 리터럴 타입 : 타입을 값 그 자체로 정의하는 유형
let numA:10 = 10;
// numA = 12; -> 10이라는 타입을 만든것이므로 다른 값으로 변경 불가
let strA: "hello" = "hello";
