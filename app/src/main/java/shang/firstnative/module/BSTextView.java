package shang.firstnative.module;

import android.content.Context;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.uimanager.events.TouchEventType;

import shang.firstnative.tool.BSLog;

/**
 * Created by wolf on 16/4/13.
 */
public class BSTextView extends TextView implements View.OnClickListener {

    public BSTextView(Context context) {
        super(context);
        this.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if (getContext() instanceof ReactContext) {
            BSLog.e("happen event");
            WritableMap event = Arguments.createMap();
            event.putString("message", "MyMessage");
            ReactContext reactContext = (ReactContext) getContext();
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                    getId(),
                    "topChange",
                    event);

//            event = Arguments.createMap();
//            event.putString("message", "MyMessage");
//            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                    getId(),
//                    "topSelect",
//                    event);
//
//            event = Arguments.createMap();
//            event.putString("message", "MyMessage");
//            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                    getId(),
//                    TouchEventType.START.getJSEventName(),
//                    event);
//
//            event = Arguments.createMap();
//            event.putString("message", "MyMessage");
//            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                    getId(),
//                    TouchEventType.MOVE.getJSEventName(),
//                    event);
//
//            event = Arguments.createMap();
//            event.putString("message", "MyMessage");
//            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
//                    getId(),
//                    TouchEventType.END.getJSEventName(),
//                    event);
        }
    }
}
