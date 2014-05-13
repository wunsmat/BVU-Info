package com.example.bvinfo;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.widget.TextView;

import com.pushbots.push.Pushbots;

public class MainActivity extends DroidGap  {

	private String SENDER_ID = "396995276909";
	private String PUSHBOTS_APPLICATION_ID = "5355f0aa1d0ab1096b8b456a";

	@Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        super.init();
        appView.addJavascriptInterface(this, "MainActivity");
        
        super.loadUrl(Config.getStartUrl());
        
		Pushbots.init(this, SENDER_ID,PUSHBOTS_APPLICATION_ID);
    }
	public int customFunction() {
		return 42;
	}

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
