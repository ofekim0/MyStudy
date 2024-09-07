/** 첫번째 사례
 * 서로 다른 타입일 경우 타입 변수를 다르게 정의
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/** 두번째 사례 1
 * 타입 변수는 호출되기 전에는 unknown으로 추론되므로 인덱스 접근 불가 -> 타입변수를 배열로 정의
 */
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue(["hello", "my", "name"]);

/** 두번째 사례 2
 * 혼합 배열일 경우 Union 타입으로 인식 -> 확실한 단일 타입으로 지정하고자 함
 */

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

// str을 number 타입으로 인식
let str2 = returnFirstValue2([1, "my", "name"]);

/** 세번째 사례
 * length가 존재하는 값들만 전달
 */
// extends 키워드를 이용해서 타입 변수에 조건을 달아서 제한 가능
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10);
