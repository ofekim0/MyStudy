// 객체 타입간의 호환성 : 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지 여부 확인
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 업캐스팅 : animal 타입이 dog 타입의 슈퍼타입
animal = dog;

// 다운캐스팅
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 33000,
  skill: "reactjs",
};

// 업캐스팅
book = programmingBook;

let book2: Book = {
  name: "리액트",
  price: 33000,
  // 초과 프로퍼티 검사 : 객체 초기값으로 객체 리터럴을 사용하면 발동 -> 실제 타입에는 정의해 놓지 않은 초과 프로퍼티는 작성하지 못하게 막음
  // skill: "reactjs",
};

// 초과 프로퍼티를 피하는 방법1
let book3: Book = programmingBook;


function func(book: Book) {}
func({
  name: "리액트",
  price: 33000,
  // 매개변수 사용할 때에도 초과 프로퍼티 발동
  //skiil: "reactjs",
})
// 초과 프로퍼티 피하는 방법2
func(programmingBook);

