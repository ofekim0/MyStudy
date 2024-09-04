// Unknown 타입 : 전체집합
function unknownExam() {
  // unknown 타입은 전체집합이므로 모든 타입의 값을 넣을 수 있다.(업캐스팅)
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;

  let unknownVar: unknown;

  // let num:number = unknownVar; -> 반대는 불가(다운캐스팅)
}

// Never 타입 : 모든 타입의 서브 타입(공집합)
function neverExam() {
  // Never 타입은 공집합이므로 모든 타입의 값을 넣을 수 없다.(다운캐스팅)
  // let a: never = 1;

  // Never 타입 활용을 위해 함수에 never 적용하는 것은 아무것도 반환하는 것이 없다는 의미
  function neverFunc(): never { 
    while (true) {}
  }

  // 반대는 가능(업캐스팅)
  let num: number = neverFunc();
}

// Void 타입 : undefined 타입의 슈퍼타입 -> undefined를 반환할 수 있음
function voidExam() {
  function voidFunc() : void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// Any 타입 : 치트키 타입 -> 타입계층도 무시
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // 단, never 타입에는 적용 안됨
  // neverVar = anyVar;
}