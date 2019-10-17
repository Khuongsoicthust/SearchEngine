package com.tpbank.search.crawler;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.tpbank.search.ElastichSearch.model.Pages;


public class MySpider {
	public static  final String DRIVER_PATH = "/home/ibminstall/Downloads/chromedriver";

    public List<Pages> promotionSpider(){
    	System.setProperty("webdriver.chrome.driver", DRIVER_PATH);
    	String root = "https://tpb.vn/khuyen-mai";																																																																													
    	List<Pages> pages = new ArrayList<Pages>();
    	DriverProvider provider = DriverProvider.getInstance();
    	provider.setDisplayType("headless");
    	WebDriver myDriver = provider.getDriver();
       	myDriver.navigate().to(root);
       	//
       	int check = 0;
       	WebElement pager = myDriver.findElement(By.cssSelector("#tab-1 > div.news-list-1 > div.pagination_news.phan-trang > ul > li.pager-item.active"));
       	while(check < Integer.parseInt(pager.getText())) {
           	List<WebElement> elements = myDriver.findElements(By.className("b_right"));
            System.out.println("vvvv"+elements.size());
            for(int i=1; i < elements.size();i++) {
            	Pages page = new Pages();
            	WebElement element = elements.get(i);
            	WebElement subElement = element.findElement(By.className("hilight-content"));
            	page.setDescription(subElement.getText());
            	WebElement ele = element.findElement(By.cssSelector("a"));
            	page.setUrl(root+ele.getAttribute("href"));
            	page.setTitle(ele.getText());
            	page.setTag("khuyến mại");
            	pages.add(page);
            	
            }
            check += 1;
            System.out.println(pager.getText());
            List<WebElement> nextElement = myDriver.findElements(By.className("pager-previous"));
            nextElement.get(1).click();
            pager = myDriver.findElement(By.cssSelector("#tab-1 > div.news-list-1 > div.pagination_news.phan-trang > ul > li.pager-item.active"));

       		
       	}


          	myDriver.close();
          	return pages;
    }
}
