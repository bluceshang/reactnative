package shang.firstnative;

import android.app.Application;

import shang.firstnative.tool.RNCacheViewManager;

/**
 * Created by wolf on 16/4/11.
 */
public class RCApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
//        RNCacheViewManager.init(this);
    }
}
