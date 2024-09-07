/** 프로미스
 * 제네릭 클래스를 기반으로 타입이 선언되어 있음
 */
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~ 때문에 실패"); // reject 인수는 any 타입으로 설정되어 있음
  }, 3000);
});

// promise는 비동기 처리 결과값의 타입을 자동으로 추론x -> 기본적으로 unknown으로 추론함 -> 제네릭 이용
promise.then((response) => {
  console.log(response * 10);
});

// 매개변수가 any 타입으로 추론되며, 정확한 타입은 알 수 없음 / 타입 변수로도 지정 불가 -> 타입 좁히기 사용
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/** 프로미스를 반환하는 함수의 타입을 정의 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id
})