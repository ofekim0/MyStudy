package final1;

public class FieldInit {
    static final int CONST_VALUE = 10;
    final int value = 10;

    // 이미 값이 할당되었으므로 생성자에서 할당 불가능
//    public FieldInit(int value) {
//        this.value = value;
}
