package com.tpbank.search.ElastichSearch.controller;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DefaultController {

    @GetMapping("/")
    public String home1() {
        return "/home";
    }
    
    @GetMapping("/demo")
    public String demo() {
    	return "demo";
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    @GetMapping("/admin")
    public String admin() {
        return "admin";
    }

    @GetMapping("/user")
    public String user() {
        return "user";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
    
    @RequestMapping(value = { "/execute"}, method = RequestMethod.GET)
    public String execute(Model model,@RequestParam(name="Title",required = false) String title,
    		@RequestParam(name="Description",required = false) String des
    		,@RequestParam(name="prefix",required = false) String prefix) {
    	
    	int count=0;
    	
    	if(title!=null) count++;
    	
    	if(des!=null) count++;
    	
    	if(prefix!=null) count++;
    	
    	System.out.println(count+"-----------------------");
    	
    	model.addAttribute("count",count);
    	
    	return "execute";
    }
    
    @GetMapping("/403")
    public String error403() {
        return "/error/403";
    }

//    @RequestMapping(value = { "/execute"}, method = RequestMethod.POST)
//	public ModelAndView execute() {
//		ModelAndView model = new ModelAndView();
//		model.setViewName("execute");
//		return model;
//	}
    
}