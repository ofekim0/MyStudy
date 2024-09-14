package generic.ex4;

import generic.animal.Animal;

public class ComplexBox<T extends Animal> {
    private T animal;

    public void set(T animal) {
        this.animal = animal;
    }

    // 제네릭 타입 vs 제네릭 메서드 : 제네릭 메서드가 높은 우선순위를 가짐
    public <T> T printAndReturn(T t) {
        System.out.println("animal.className: " + animal.getClass().getName());
        System.out.println("t.className: " + t.getClass().getName());
        return t;
    }
}
