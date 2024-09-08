/** 분산적 조건부 타입 : 조건부 타입을 union과 함께 사용할 때 조건부 타입이 분산적으로 동작하도록 설정 */
type StringNumberSwitch<T> = T extends number ? string : number;
// type StringNumberSwitch<T> = [T] extends [number] ? string : number; -> 분산적 조건부 타입 막는 방법

/** c의 타입이 number가 아닌 number | string으로 추론됨
 * 조건부 타입의 타입 변수로 union 변수를 할당하면 분산적 조건부 타입으로 발동
 * 한번은 number / 한번은 string으로 분산되서 타입 변수에 들어감 -> 이 둘의 결과를 union으로 묶음
 */
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>; // -> number | string

/** 예제 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
/**
 * 1단계
 * Exclude<number, string> |
 * Exclude<string, string> |
 * Exclude<boolean, string>
 * 
 * 2단계
 * number |
 * never |
 * boolean
 * 
 * 결과 : never은 공집합이므로 생략
 * number | boolean
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

