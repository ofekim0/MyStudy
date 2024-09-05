// 타입 단언

type Person = {
    name: string;
    age: number;
};

// 선언만 해두고 초기화는 나중에 하고 싶을때 사용
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

// 초과 프로퍼티 피할때 사용
let dog = {
    name : "돌돌이",
    color : "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;

/**
 * const 단언 : const로 선언했을때의 타입과 동일한 효과 -> 객체 타입과 사용
 */
let num4 = 10 as const;

// 프로퍼티를 수정할 수 없게 바뀜(readonly로)
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

/**
 * Non Null 단언 : 어떤 값이 Null이나 Undefined가 아니라고 컴파일러에 알림
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "이정환"
};

// 자동으로 ? 추가 : 옵셔널 체이닝 - author 값이 null이나 undefined일 경우 점표기법에 오류가 발생하므로 이 경우 값 전체가 undefined가 되도록 만들어줌
// 이러한 옵셔널 체이닝 성질로 인해 undefined가 될 가능성이 있어 number 타입 지정 불가
// -> ?를 !로 바꿔주기 (Non Null 단언)
const len: number = post.author!.length;
