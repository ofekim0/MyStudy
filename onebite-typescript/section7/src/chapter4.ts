/** 제네릭 클래스
 * 제네릭 인터페이스 등과는 다르게 클래스 생성자에 전달하는 값의 타입을 기준으로 타입변수의 타입을 추론
 * -> 타입을 명시하지 않아도 됨
*/

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");
