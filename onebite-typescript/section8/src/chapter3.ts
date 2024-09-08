/** 맵드 타입 : 객체 타입 조작 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입은 인터페이스에서는 만들 수 없음
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // 선택적 프로퍼티(?) 일괄 선택 가능
};

// 응용1
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 응용2
type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {}
