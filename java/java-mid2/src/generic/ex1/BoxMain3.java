package generic.ex1;

public class BoxMain3 {
    public static void main(String[] args) {
        // 생성 시점에 T의 타입 결정
        GenericBox<Integer> integerBox = new GenericBox<Integer>();
        integerBox.set(10);
        // integerBox.set("hi"); -> Integer 타입만 허용, 컴파일 오류
        Integer integer = integerBox.get(); // Integer 타입 반환(캐스팅 X)
        System.out.println("integer = " + integer);

        // 타입 추론 : 생성하는 제네릭 타입 생략
        GenericBox<Integer> integerBox2 = new GenericBox<>();
    }
}
