package lang.string.builder;

public class LoopStringMain {
    public static void main(String[] args) {
        // String result = "";
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 100000; i++) {
            // result += "Hello Java";
            sb.append("Hello Java");
        }
    }
}
