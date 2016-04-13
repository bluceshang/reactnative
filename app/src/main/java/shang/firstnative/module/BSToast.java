package shang.firstnative.module;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by wolf on 16/4/13.
 */
public class BSToast extends ReactContextBaseJavaModule {
    private static final String NAME = "BSToast";
    private static final String SHORT_KEY = "SHORT";
    private static final String LONG_KEY = "LONG";

    public BSToast(ReactApplicationContext context){
        super(context);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String,Object> constants = new HashMap<>();
        constants.put(SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(LONG_KEY,Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String msg,int duration){
        Toast.makeText(getReactApplicationContext(),msg,duration).show();
    }
}
