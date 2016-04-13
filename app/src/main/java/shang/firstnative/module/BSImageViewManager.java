package shang.firstnative.module;



import android.support.annotation.Nullable;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ImageResizeMode;
import com.facebook.react.views.image.ReactImageView;

/**
 * Created by wolf on 16/4/13.
 */
public class BSImageViewManager extends SimpleViewManager<ReactImageView> {
    private static final String NAME = "BSImageView";

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    protected ReactImageView createViewInstance(ThemedReactContext reactContext) {
        return new ReactImageView(reactContext, Fresco.newDraweeControllerBuilder(),null);
    }

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view,@Nullable String src){
        view.setSource(src);
    }

    @ReactProp(name = "borderRadius",defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view,float borderRadius){
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view,@Nullable String resizeMode){
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }
}
