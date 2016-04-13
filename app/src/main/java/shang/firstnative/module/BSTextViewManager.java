package shang.firstnative.module;

import android.graphics.Color;
import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import shang.firstnative.tool.BSLog;

/**
 * Created by wolf on 16/4/13.
 */
public class BSTextViewManager extends SimpleViewManager<BSTextView> {
    private static final String NAME = "BSTextView";
    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected BSTextView createViewInstance(ThemedReactContext reactContext) {
        BSTextView textView = new BSTextView(reactContext);
        return textView;
    }

    @ReactProp(name = "text")
    public void setText(BSTextView view,@Nullable String text){
        view.setText(text);
    }

    @ReactProp(name = "textColor")
    public void setTextColor(BSTextView view,@Nullable String textColor){
        view.setTextColor(Color.parseColor(textColor));
    }

    @ReactProp(name = "textSize")
    public void setTextSize(BSTextView view,@Nullable float textSize){
        view.setTextSize(textSize);
    }

}
