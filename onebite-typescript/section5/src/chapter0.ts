/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi() : void;
  // 함수타입 표현식이 아닌 호출 시그니쳐를 사용해서 타입을 정의해야 오버로딩 구현이 가능
  sayHi(a: number, b:number) : void;
} // | number; -> 인터페이스에 직접적으로 union, intersection 불가


const person: Person | number = {
  name: "이정준",
  // age: 27
  sayHi: function () {
      console.log("Hi");
  }
};

person.sayHi();
person.sayHi(1, 2);