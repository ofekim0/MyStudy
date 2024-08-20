package lang.immutable.address;

public class ImmutableAddress {

    // 내부 값이 변경되면 안되므로 final로 선언
    private final String value;

    public ImmutableAddress(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "Address{" +
                "value='" + value + '\'' +
                '}';
    }
}
