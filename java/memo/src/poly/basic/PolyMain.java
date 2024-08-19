package poly.basic;

public class PolyMain {
    public static void main(String[] args) {
        // 부모 변수가 자식 인스턴스 참조(다형적 참조)
        System.out.println("Parent -> Child");
        Parent poly = new Child();

        poly.parentMethod();
        // poly.childMethod();
    }
}
