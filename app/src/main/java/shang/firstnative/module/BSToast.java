package shang.firstnative.module;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.PixelUtil;

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

    @ReactMethod
    public void stringToInt(String str,Callback errorCallback,Callback successCallback){
        try {
            int value = Integer.parseInt(str.trim());
            successCallback.invoke(value+" success");
        }catch (Exception e){
            errorCallback.invoke("输入的值不能转换成整形，请检查输入类型!");
        }
    }

    @ReactMethod
    public void messageOperation(String msg,Promise promise){
        try {
            int value = Integer.parseInt(msg.trim());
            WritableMap map = Arguments.createMap();
            map.putDouble("relativeX", PixelUtil.toDIPFromPixel(80f));
            map.putDouble("relativeY",PixelUtil.toDIPFromPixel(100f));
            map.putDouble("width",PixelUtil.toDIPFromPixel(600f));
            map.putDouble("height",PixelUtil.toDIPFromPixel(1080f));
            map.putString("message",value+" 转换后的消息");
            promise.resolve(map);
        }catch (Exception e){
            promise.reject("sorry error ");
        }
    }


}
