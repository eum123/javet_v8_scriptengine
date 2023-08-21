package javet;

public class CreateInstance {
    public Object of(String className) throws Exception {
        return Class.forName(className).newInstance();
    }
}
