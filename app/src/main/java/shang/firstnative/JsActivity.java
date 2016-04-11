package shang.firstnative;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

public class JsActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView rootView;
    private ReactInstanceManager instanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        rootView = new ReactRootView(this);
        instanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        rootView.startReactApplication(instanceManager,"FirstNative",null);
        setContentView(rootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (null != instanceManager){
            instanceManager.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (null != instanceManager){
            instanceManager.onResume(this,this);
        }
    }

    @Override
    public void onBackPressed() {
        if (null != instanceManager){
            instanceManager.onBackPressed();
        }else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && instanceManager != null){
            instanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
