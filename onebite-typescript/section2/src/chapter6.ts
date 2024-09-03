// any : 특정 변수의 타입을 확실히 모를때
let anyVar: any = 10;
let num: number = 10;
anyVar = "hello";
num = anyVar;

// unknown : 모든 타입을 저장할 순 있지만, 모든 타입의 변수에 할당할 수는 없음
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;

if (typeof unknownVar === "number") {
  num = unknownVar;
}