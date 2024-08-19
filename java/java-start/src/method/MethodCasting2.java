package method;

public class MethodCasting2 {
    public static void main(String[] args) {
        int number = 100;
        // 자동 형변환
        printNumber(number);
    }

    public static void printNumber(double n) {
        System.out.println("숫자: " + n);
    }
}
