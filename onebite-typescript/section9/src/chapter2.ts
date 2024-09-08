/** infer : 조건부 타입 내에서 특정 타입만 추론 */

type FuncA = () => string;

type FuncB = () => number;

// infer R : 그냥 R이라고 생각하면 됨
type ReturnType<T> = T extends () => infer R ? R : never; // 조건값이 참이 되도록 R 값을 추론함

// string
type A = ReturnType<FuncA>;

// number
type B = ReturnType<FuncB>;

// never : 추론이 불가함
type C = ReturnType<number>;

/** 예제 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;

