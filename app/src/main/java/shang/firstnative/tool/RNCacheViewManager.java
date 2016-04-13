package shang.firstnative.tool;

import android.app.Application;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.shell.MainReactPackage;

import shang.firstnative.BuildConfig;

/**
 * 缓存View管理
 * Created by wolf on 16/4/11.
 */
public final class RNCacheViewManager {
    private static ReactInstanceManager reactInstanceManager = null;

    public static void init(Application application) {
        reactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new BSReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
    }

    public static ReactInstanceManager getReactInstanceManager() {
        return reactInstanceManager;
    }
}
