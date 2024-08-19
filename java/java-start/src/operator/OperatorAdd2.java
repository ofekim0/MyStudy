package operator;

public class OperatorAdd2 {
    public static void main(String[] args) {
        int a = 1;
        int b = 1;
        int c = 0;
        int d = 0;

        c = ++a;
        d = b++;

        System.out.println(c);
        System.out.println(d);
    }
}
