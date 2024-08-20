package lang.object.equals;

import java.util.Objects;

public class UserV2 {

    private String id;

    public UserV2(String id) {
        this.id = id;
    }

//    @Override
//    public boolean equals(Object obj) {
//        // obj에는 id가 없으므로 다운캐스팅
//        UserV2 user = (UserV2) obj;
//        // 문자열 비교는 ==이 아닌 equals() 사용함
//        return  id.equals(user.id);
//    }

    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        UserV2 userV2 = (UserV2) object;
        return Objects.equals(id, userV2.id);
    }
}
