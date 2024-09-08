/** 인덱스트 엑세스 타입
 * 인덱스를 이용해 다른 타입 내 특정 프로퍼티의 타입을 추출하는 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 인덱스에 number 타입을 넣어주면 배열 타입으로부터 요소의 타입 추출 가능
// number literal 타입을 넣어도 됨(0, 1 등 : 숫자 상관x)
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// 튜플 타입 안의 공통 타입에서 최적의 타입을 뽑아옴
type TupNum = Tup[number];
