package poly.ex5;

public class InterfaceMain  {
    public static void main(String[] args) {
        Dog dog = new Dog();

        soundAnimal(dog);
    }

    private static void soundAnimal(InterfaceAnimal animal) {
        System.out.println("동물 소리 테스트 시작");
        animal.sound();
        System.out.println("동물 소리 테스트 종료");
    }
}
