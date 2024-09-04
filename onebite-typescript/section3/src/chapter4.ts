// 대수타입 : 여러 개의 타입을 합성해서 새롭게 만들어낸 타입 -> 합집합 / 교집합 타입

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person

let union1 : Union1 = {
  name: "",
  color: ""
};

let union2: Union1 = {
  name: "",
  language: "",
};

// union1과 union2의 교집합에 해당
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}

// let union4: Union1 = {
//   name: ""
// };

// 2. 교집합 타입 - Intersection 타입
// 기본타입으로 교집합 타입을 만들면 왠만하면 never 타입으로 잡힘 -> 객체 타입에 주로 사용
let variable: number & string;

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

