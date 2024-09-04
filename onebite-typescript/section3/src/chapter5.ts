// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정준",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let {id, name, profile} = c;
let [one, two, three] = [1, "hello", true];

function func(message="hello") {
  // 함수의 반환값을 기준으로 타입을 추론
  return "hello";
}

// 초기값을 설정하지 않으면 any로 설정됨 -> 암묵적 any타입, 추천x
let d;
// 값을 설정하는 즉시 다시 타입 추론 : any 타입 진화
d = 10;
d.toFixed();

d="hello";
d.toUpperCase();
// d.toFixed();

// const의 경우 리터럴 타입으로 추론됨.
const num = 10;
const str = "hello";

// Union 타입으로 추론됨
let arr = [1, "string"];
