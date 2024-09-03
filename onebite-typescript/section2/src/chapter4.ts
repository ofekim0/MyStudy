// 타입 별칭 : 타입을 변수처럼 사용, 수정도 가능
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "이정준",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시"
};

// 인덱스 시그니처 : key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key : string] : string;
}

let countryCodes: CountryCodes = {
  Korea : 'ko',
  UnitedState : 'us',
  UnitedKingdom : 'uk',
}

// Korea 속성을 반드시 가지도록 설정 : 인덱스 시그니처의 value 타입과 같지 않으면 문제 발생
type CountryNumberCodes = {
  [key : number] : number;
  Korea: number;
}

let countryNumberCodes = {
  Korea : 410,
  UnitedState : 840,
  UnitedKingdom : 826
}