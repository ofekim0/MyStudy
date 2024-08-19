package extends1.super2;

public class ClassC extends ClassB{
    public ClassC() {
        // 생성자는 하나만 호출할 수 있으므로 ClassB의 두 생성자 중 하나만 선택
        super(10, 20);
        System.out.println("ClassC 생성자");
    }
}
