package generic.test.ex3;

import generic.test.ex3.unit.BioUnit;

public class UnitUtil {
    public static <T extends BioUnit> T maxHp (T t1, T t2) {
        int hp1 = t1.getHp();
        int hp2 = t2.getHp();
        return hp1 >= hp2 ? t1 : t2;
    }
}
