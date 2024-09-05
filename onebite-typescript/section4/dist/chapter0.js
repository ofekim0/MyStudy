/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = "이정준", tall) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall}`);
    }
}
;
introduce("이정준", 190);
introduce("이정환");
export {};
