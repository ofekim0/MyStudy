// 선언 합침 : 타입과 다르게 동일한 이름으로 인터페이스를 선언해도 문제 x -> 합쳐짐
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/** 모듈 보강할때 사용 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "ello",
};
