package javet;

import com.caoccao.javet.exceptions.JavetError;
import com.caoccao.javet.exceptions.JavetException;
import com.caoccao.javet.interception.BaseJavetInterceptor;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.callback.JavetCallbackContext;
import com.caoccao.javet.utils.SimpleMap;
import com.caoccao.javet.values.V8Value;
import com.caoccao.javet.values.reference.IV8ValueObject;
import com.caoccao.javet.values.reference.V8ValueObject;
import wne.rule.hrs.engine.core.exception.RuleException;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class BreakPointIntercepter extends BaseJavetInterceptor {

    private Lock lock = new ReentrantLock();
    private Condition condition = lock.newCondition();

    private boolean stop = false;

    private static final String BREAK_POINT_FUNCTION = "break";

    public BreakPointIntercepter(V8Runtime v8Runtime) {
        super(v8Runtime);
    }

    public boolean breakPoint(V8Value... v8Values) {
        System.out.println("start brakpoint" + v8Values);
        lock.lock();
        try {

            condition.await();

            return stop;
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            lock.unlock();
        }
    }

    public void notAndThrow() {
        System.out.println("noti" );
        lock.lock();
        try {
            stop = true;

            condition.signalAll();

           // throw new RuntimeException("stop");

        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {

            lock.unlock();
        }
    }

    public void noti() {
        System.out.println("noti" );
        lock.lock();
        try {
            stop = false;
            condition.signalAll();

        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {

            lock.unlock();
        }
    }

    @Override
    public boolean register(IV8ValueObject... iv8ValueObjects) throws JavetException {
        try (V8ValueObject console = v8Runtime.createV8ValueObject()) {
            for (IV8ValueObject iV8ValueObject : iv8ValueObjects) {
                iV8ValueObject.set("service", console);
                register(console, BREAK_POINT_FUNCTION, "breakPoint");

            }
            return true;
        }

    }

    @Override
    public boolean unregister(IV8ValueObject... iv8ValueObjects) throws JavetException {
        boolean successful = true;
        for (IV8ValueObject iV8ValueObject : iv8ValueObjects) {
            try (V8ValueObject console = iV8ValueObject.get("service")) {
                console.delete(BREAK_POINT_FUNCTION);
            }
            successful &= iV8ValueObject.delete("service");
        }
        return successful;
    }

    protected void register(IV8ValueObject iV8ValueObject, String jsFunctionName, String javaFunctionName)
            throws JavetException {
        try {

            iV8ValueObject.bindFunction(jsFunctionName, new JavetCallbackContext(
                    this,
                    getClass().getMethod(javaFunctionName, V8Value[].class),
                    false
            ));
        } catch (NoSuchMethodException e) {
            throw new JavetException(
                    JavetError.CallbackRegistrationFailure,
                    SimpleMap.of(
                            JavetError.PARAMETER_METHOD_NAME, javaFunctionName,
                            JavetError.PARAMETER_MESSAGE, e.getMessage()),
                    e);
        }
    }


}
