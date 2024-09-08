/** keyof 연산자를 타입을 정의할 때 사용하는 경우 */

// 변수 person의 타입을 추론하여 타입 Person에 정의해줌
type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");
