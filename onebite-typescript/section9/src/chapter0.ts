/** 조건부 타입 */

// 예시 : 조건이 거짓이므로 A는 number 타입이 됨
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjA 가 ObjB의 슈퍼타입이므로 B의 타입은 number가 됨
type B = ObjB extends ObjA ? number : string;

/** 제네릭과 조건부 타입 */
type StringNumberSwitch<T> = T extends number ? string : number;

// string 타입으로 정의됨
let varA: StringNumberSwitch<number>;

// number 타입으로 정의됨
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string? string : undefined;

function removeSpaces<T>(text: any){
  if (typeof text === "string") {
    return text.replaceAll(" ", "");  
  } else {
    return undefined;
  }
  
}

let result = removeSpaces("hi im winterlood");
