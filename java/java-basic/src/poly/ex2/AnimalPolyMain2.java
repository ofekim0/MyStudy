package poly.ex2;

public class AnimalPolyMain2 {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Cat cat = new Cat();
        Caw caw = new Caw();
        // animal 타입의 배열 생성 -> 다형적 참조
        Animal[] animalArr = {dog, cat, caw};

        for (Animal animal : animalArr) {
            System.out.println("동물 소리 테스트 시작");
            // 메서드 오버라이딩
            animal.sound();
            System.out.println("동물 소리 테스트 종료");
        }
    }
}
