package access.a;

public class AccessInnerMain {
    public static void main(String[] args) {
        AccessData data = new AccessData();

        // default 호출 가능 : 같은 패키지
        data.defaultField = 2;
        data.defaultMethod();

        // private 호출 불가
        // data.privateField = 3;
        // data.privateMethod();

        // public 호출 가능 -> innerAccess가 호출된 뒤, 메서드 내부에서 실행되는 호출은 내부호출이다.
        data.innerAccess();
    }
}
