package lang.wrapper;

public class AutoBoxingMain {

    public static void main(String[] args) {
        // Primitive -> Wrapper
        int value = 7;
        // 박싱
        // Integer boxedValue = Integer.valueOf(value);
        // 오토 박싱
        Integer boxedValue = value;

        // Wrapper -> Primitive
        // 언박싱
        // int unboxedValue = boxedValue.intValue();
        // 오토 언박싱
        int unboxedValue = boxedValue;

        System.out.println("boxedValue = " + boxedValue);
        System.out.println("unboxedValue = " + unboxedValue);
    }
}
