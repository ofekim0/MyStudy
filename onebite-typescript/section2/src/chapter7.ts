// void : 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// 함수의 경우 리턴이 없을 경우 사용 -> null이나 undefined의 경우 return을 써야 함
function func2(): void {
  console.log("hello");
}

// 변수는 undefined만 사용 가능
let a: void;
a = undefined;

// never : 존재하지 않는, 불가능한 타입 -> 정상적으로 종료될 수 없어서 반환값이 있는것 자체가 모순인 경우 사용
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// 해당 변수에는 어떤 값도 저장 불가능 : any도 불가능
let b: never;

