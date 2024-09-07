package generic.ex1;

public class RowTypeMain {
    public static void main(String[] args) {
        GenericBox integerBox = new GenericBox(); // 타입 생략 시 Object로 설정됨
        // GenericBox<Object> integerBox = new GenericBox<>(); // 권장
    }
}
