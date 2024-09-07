/**제네릭 : 반환값의 타입을 가변적으로 정해줄 수 있음 */

// 제네릭 함수
function func<T>(value: T): T { // <T> : 타입변수, 호출된 값에 따라 다른 타입을 담음
  return value;
}

let num = func(10);
let bool = func(true);

// 직접 튜플로 할당
let arr = func<[number, number, number]>([1, 2, 3]);
