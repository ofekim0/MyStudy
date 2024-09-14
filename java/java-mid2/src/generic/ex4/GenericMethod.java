package generic.ex4;

public class GenericMethod {
    public static Object objMethod(Object obj) {
        System.out.println("Object print: " + obj);
        return obj;
    }

    // 제네릭 메서드 : 메서드 안에서만 사용하는 제네릭
    public static <T> T genericMethod(T obj) {
        System.out.println("generic print: " + obj);
        return obj;
    }

    public static <T extends Number> T numberMethod(T t) {
        System.out.println("bound print: " + t);
        return t;
    }
}
