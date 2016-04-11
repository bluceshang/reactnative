package shang.firstnative.tool;

import android.app.Activity;
import android.app.Application;
import android.content.Context;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.shell.MainReactPackage;

import shang.firstnative.BuildConfig;

/**
 * 缓存View管理
 * Created by wolf on 16/4/11.
 */
public final class RNCacheViewManager {
    private static ReactRootView reactRootView = null;
    private static ReactInstanceManager reactInstanceManager = null;
//    private static AbsIn

    public static void init(Application application){
        reactRootView = new ReactRootView(application);
        reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        reactRootView.startReactApplication(reactInstanceManager,"FirstNative",null);
    }

    public static ReactRootView getReactRootView() {
        return reactRootView;
    }
}
