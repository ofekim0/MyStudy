/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
    name: string;
    age: number;
};

// 1. value를 Union타입으로 적용했음에도
function func(value: number | string | Date | Person) {
    if(typeof value === 'number') { // 4-1. if문으로 인해 value 타입이 number로 보장되므로 타입이 좁혀짐(타입가드)
        // 2. 이 구역에서는 number로 추론되고
        console.log(value.toFixed());
    } else if(typeof value === 'string') {// 4-2. if문으로 인해 value 타입이 string으로 보장~~`
        // 3. 이 구역에서는 string으로 추론됨
        console.log(value.toUpperCase);
    // } else if(typeof value === 'object') { -> value의 타입이 Date라는 보장을 못함 : null도 object로 인식될 수 있음
    } else if(value instanceof Date) { // instanceof : value가 Date 객체의 인스턴스인지 확인
        console.log(value.getTime());
    } else if(value && "age" in value) { // value && : in 뒤에는 undefined나 null이 오면 안됨
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}