package com.tpbank.search.crawler;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverProvider {
	private String extension;
	private String displayType;
	private static DriverProvider instance;
	public String getExtension() {
		return extension;
	}
	public void setExtension(String extension) {
		this.extension = extension;
	}
	public String getDisplayType() {
		return displayType;
	}
	public void setDisplayType(String displayType) {
		this.displayType = displayType;
	}
	public static DriverProvider getInstance() {
		if (instance == null) {
			instance = new DriverProvider();
		}
		return instance;
	}
	public WebDriver getDriver() {
		ChromeOptions options = new ChromeOptions();
		if(getDisplayType() != null) {
			options.addArguments(getDisplayType());

		}

		WebDriver myDriver = new ChromeDriver(options);
		return myDriver;
	}
	

}
