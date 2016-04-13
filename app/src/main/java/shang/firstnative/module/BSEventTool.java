package shang.firstnative.module;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by wolf on 16/4/13.
 */
public class BSEventTool {
    /**
     * 发送事件给JavaScript
     *
     * @param reactContext
     * @param eventName
     * @param params
     */
    public static void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }
}
