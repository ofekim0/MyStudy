package nested.local;

public class LocalOuterV1 {
    private int outInstanceVar = 3;

    public void process(int paramVar) {
        int localVar = 1;

        class LocalPrinter {
            int value = 0;

            public void printData() {
                System.out.println("value = " + value);
                // 지역 변수에 접근 가능
                System.out.println("localVar = " + localVar);
                // 매개 변수에 접근 가능 : 매개변수도 지역 변수 중 하나
                System.out.println("paramVar = " + paramVar);
                System.out.println("outInstanceVar = " + outInstanceVar);
            }
        }

        LocalPrinter printer = new LocalPrinter();
        printer.printData();
    }

    public static void main(String[] args) {
        LocalOuterV1 localOuter = new LocalOuterV1();
        localOuter.process(2);
    }
}
