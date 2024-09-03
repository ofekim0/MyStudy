// object : 요소에 접근하기 위해서는 객체 리터럴 타입을 이용해서 정의해야 함
 // user의 id를 선택적 property로 설정
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정준"
}
 user.id;

 user = {
  name: "홍길동",
 }

 // readonly : 객체 property의 값을 바꾸는 것을 방지
 let config: {
  readonly apiKey: string;
 } = {
  apiKey: "MY API KEY"
 }

 // config.apiKey = "hacked"