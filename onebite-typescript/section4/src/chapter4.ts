/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name:string;
    isScratch: boolean;
};

type Animal = Cat | Dog;


function isDog(animal: Animal):animal is Dog { // 2. 사용자 정의 타입가드 설정
    // 1. 타입스크립트는 우리가 직접 만든 반환값으로는 타입을 잘 좁혀주지 않는다.
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal) : animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        animal;
    } else if ("isScratch" in animal) {
        animal;
    }
}