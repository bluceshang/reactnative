package shang.firstnative;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.KeyEvent;
import android.widget.FrameLayout;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

import shang.firstnative.tool.RNCacheViewManager;

public class JsActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private ReactRootView rootView;
    private ReactInstanceManager instanceManager;
    private FrameLayout containerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_js);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        rootView = new ReactRootView(this);
        instanceManager = RNCacheViewManager.getReactInstanceManager();

        rootView.startReactApplication(instanceManager,"Playground",null);
        containerView = (FrameLayout)findViewById(R.id.js_container);
        containerView.addView(rootView);
//        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
//        setSupportActionBar(toolbar);
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
