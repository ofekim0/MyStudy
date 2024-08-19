package static1;

public class DecoMain {
    public static void main(String[] args) {
        String s = "hello java";
        // static 메서드
        String deco = DecoUtil2.deco(s);

        System.out.println("before: " + s);
        System.out.println("after: " + deco);
    }
}
