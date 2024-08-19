package extends1.super2;

public class ClassB extends ClassA {
    public ClassB(int a) {
        super(); // 부모가 기본 생성자인 경우 생략 가능
        System.out.println("ClassB 생성자a=" + a);
    }

    public ClassB(int a, int b) {
        super();
        System.out.println("ClassB 생성자 a=" + a + "b=" + b);
    }
}
