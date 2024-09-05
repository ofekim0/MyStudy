/**
 * 함수 오버로딩 : 하나의 함수룰 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 */


// 오버로드 시그니쳐 : 함수를 오버로딩하기 위해 각각 매개변수 별로 다른 버젼을 명시한 것
function func(a:number): void;
function func(a:number, b:number, c:number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a:number, b?:number, c?:number) {
    if (typeof b==="number" && typeof c === "number") {
        console.log(a+b+c);
    } else {
        console.log(a * 20);
    }
}

// 오버로드 시그니쳐가 있으면 함수 호출 시, 실제 구현부를 따르지 않고 오버로드 시그니쳐의 버전 중 하나를 따라감
// func();
func(1);
// func(1, 2);
func(1, 2, 3);