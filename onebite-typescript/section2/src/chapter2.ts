// 배열
let numArr:number[] = [1, 2, 3];

let strArr:string[] = ["hello", "im", "winterlood"];

// 또다른 배열 타입 지정 방법 : 제네릭 문법 사용
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5]
]

// 튜플 : 길이와 타입이 고정된 배열 -> but 근본적으로는 배열이라 push, pop 메서드로 요소를 넣거나 빼도 오류가 발생x
// tup1 : 두 개의 넘버 타입 요소만 저장 가능
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플의 활용 : 배열의 인덱스 위치에 따라 넣어야 하는 값들이 이미 정해져 있을 때
const users: [string, number][] = [
    ["이정환", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"] -> 오류 감지
]