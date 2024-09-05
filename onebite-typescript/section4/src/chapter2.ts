/**
 * 함수 타입의 호환성 : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a = b;
// b = a; -> 반환값 간의 다운캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value:number) => void;
type D = (value:10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 매개변수를 기준으로 호환성을 판단할 때는 업캐스팅일 때 호환이 안됨
d = c;

// 예시
type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog:Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animal에 dogFunc를 집어넣는 과정
// let testFunc = (animal:Animal) => {
//     console.log(animal.name);
//     console.log(animal.color);
// }

// 2-2. 매개변수의 개수가 다를 때 (타입이 같은 매개변수여야 함)
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1:Func1 = (a,b) => {};
let func2:Func2 = (a) => {};

// 매개변수의 개수가 더 작은 쪽이 할당되는건 가능
func1 = func2;
// func2 = func1;