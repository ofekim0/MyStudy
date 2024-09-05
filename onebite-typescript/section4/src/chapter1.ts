/**
 * 함수 타입 표현식 : 타입 별칭을 이용해 함수 타입 정의
 */

type Operation = (a:number, b:number) => number;

const add: Operation = (a, b) => a + b;

/**
 * 호출 시그니쳐(콜 시그니쳐) : 함수 타입을 분리해서 정의
 */

type Operation2 = {
    (a:number, b:number): number;
}

const add2: Operation = (a, b) => a + b;