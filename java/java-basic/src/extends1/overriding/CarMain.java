package extends1.overriding;

public class CarMain {
    public static void main(String[] args) {
        ElectricCar electricCar = new ElectricCar();
        // Car의 move를 상속받음
        electricCar.move();
        electricCar.charge();

        GasCar gasCar = new GasCar();
        // Car의 move를 상속받음
        gasCar.move();
        gasCar.fillUp();
    }
}
