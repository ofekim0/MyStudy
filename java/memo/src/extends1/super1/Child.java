package extends1.super1;

public class Child extends Parent{
    public String value = "child";

    @Override
    public void hello() {
        System.out.println("Child.hello");
    }

    public void call() {
        System.out.println("this value = " + this.value);
        // 부모 클래스의 value 사용
        System.out.println("super value = " + super.value);

        this.hello();
        // 부모 클래스의 hello 사용
        super.hello();
    }
}
