package com.tpbank.search.ElastichSearch.resource;



import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.tpbank.search.ElastichSearch.model.Pages;

@Controller
@RequestMapping("/elastic/search")
public class SearchService {
	Client client;

	@SuppressWarnings("resource")
	public SearchService() throws UnknownHostException {
		client = new PreBuiltTransportClient(
				  Settings.builder().put("client.transport.sniff", true)
				                    .put("cluster.name","elasticsearch").build()) 
				  .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("127.0.0.1"), 9300));
    }
	
	@RequestMapping(value = "/{type}/{text}/{textTag}", method = RequestMethod.GET) 
    public String mustMatchTypeSearchWithTags(Model model, @PathVariable final String type,@PathVariable final String text,@PathVariable final String textTag) {

    	List<Pages> fullResults =  new ArrayList<Pages>();
    	List<Pages> resultsWithTag =  new ArrayList<Pages>();
    	List<Pages> resultWithoutTag = new ArrayList<Pages>();
		try {
			fullResults = new SearchResource().matchWithTypeSearch(type, text);
			resultsWithTag = new SearchResource().mustMatchTypeSearchWithTag(type, text, textTag);
			resultWithoutTag = new SearchResource().mustNotMatchTypeSearchWithTag(type, text, textTag);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
   

    	model.addAttribute("fullResults", fullResults);
    	model.addAttribute("resultsWithTag", resultsWithTag);
    	model.addAttribute("resultWithoutTag",resultWithoutTag);
    	
    	return "searchResult";
    }
	
	@RequestMapping(value = "/boost/{type}/{text}/{boostWord}", method = RequestMethod.GET) 
    public String boostMatchQuery(Model model, @PathVariable final String type,@PathVariable final String text,@PathVariable final String boostWord) {

    	List<Pages> fullResults =  new ArrayList<Pages>();
    	List<Pages> resultsWithTag =  new ArrayList<Pages>();
    	List<Pages> resultWithoutTag = new ArrayList<Pages>();
		try {
			fullResults = new SearchResource().boostMatchSearch(type, text, boostWord);
			resultsWithTag = new SearchResource().mustMatchTypeSearchWithTag(type, text, "khuyến mại");
			resultWithoutTag = new SearchResource().mustNotMatchTypeSearchWithTag(type, text, "khuyến mại");
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
   

    	model.addAttribute("fullResults", fullResults);
    	model.addAttribute("resultsWithTag", resultsWithTag);
    	model.addAttribute("resultWithoutTag",resultWithoutTag);
    	
    	return "searchResult";
    }
	@RequestMapping(value = "/general/{type}/{text}", method = RequestMethod.GET)
    public String generalSearch(Model model, @PathVariable final String type,@PathVariable final String text) {

    	List<Pages> fullResults =  new ArrayList<Pages>();
    	List<Pages> resultsWithTag =  new ArrayList<Pages>();
    	List<Pages> resultWithoutTag = new ArrayList<Pages>();
		try {
			fullResults = new SearchResource().prefixMatchWithTypeSearch(type, text);
			resultsWithTag = new SearchResource().mustMatchTypeSearchWithTag(type, text, "cho vay");
			resultWithoutTag = new SearchResource().mustNotMatchTypeSearchWithTag(type, text, "cho vay");
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
   

    	model.addAttribute("fullResults", fullResults);
    	model.addAttribute("resultsWithTag", resultsWithTag);
    	model.addAttribute("resultWithoutTag",resultWithoutTag);
    	
    	return "searchResult";
    }
	@RequestMapping(value = "/all/{type}/{text}", method = RequestMethod.GET)
    public String getALL(Model model, @PathVariable final String type,@PathVariable final String text) {

    	List<Pages> fullResults =  new ArrayList<Pages>();
    	List<Pages> resultsWithTag =  new ArrayList<Pages>();
    	List<Pages> resultWithoutTag = new ArrayList<Pages>();
		try {
			fullResults = new SearchResource().prefixMatchWithTypeSearch(type, text);
			resultsWithTag = new SearchResource().mustMatchTypeSearchWithTag(type, text, "cho vay");
			resultWithoutTag = new SearchResource().mustNotMatchTypeSearchWithTag(type, text, "cho vay");
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
   

    	model.addAttribute("fullResults", fullResults);
    	model.addAttribute("resultsWithTag", resultsWithTag);
    	model.addAttribute("resultWithoutTag",resultWithoutTag);
    	
    	return "result";
    }
//    @GetMapping(value = "${str.value}"+"/{text}")
//    public String search(Model model, @PathVariable final String text,@RequestParam(value="NofPage", required=false) String nofPage
//    		,@RequestParam(value="beforePage",required=false)String beforePage) {
//
//    	List<Pages> fullResults =  new ArrayList<Pages>();
//    	List<Pages> resultsWithTag =  new ArrayList<Pages>();
//    	List<Pages> resultWithoutTag = new ArrayList<Pages>();
//		try {
//			fullResults = new SearchResource().prefixMatchWithTypeSearch(type, text);
//			resultsWithTag = new SearchResource().mustMatchTypeSearchWithTag(type, text, "cho vay");
//			resultWithoutTag = new SearchResource().mustNotMatchTypeSearchWithTag(type, text, "cho vay");
//		} catch (UnknownHostException e) {
//			e.printStackTrace();
//		}
//   
//
//    	model.addAttribute("fullResults", fullResults);
//    	model.addAttribute("resultsWithTag", resultsWithTag);
//    	model.addAttribute("resultWithoutTag",resultWithoutTag);
//    	
//    	return "searchResult";
//    }
//    @GetMapping(value = "all/{text}")
//    public String getAll(Model model, @PathVariable final String text,@RequestParam(value="NofPage", required=false) String nofPage
//    		,@RequestParam(value="beforePage",required=false)String beforePage) {
//    	List<Pages> pages = null;
//    	if(nofPage==null||Integer.valueOf(nofPage)==1) {
//    		try {
//				pages=  new SearchResource().matchAllSearch().subList(0, 5);
//			} catch (UnknownHostException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//    	}
//    	else {
//    		try {
//				pages=  new SearchResource().matchAllSearch().subList(5*(Integer.valueOf(nofPage)-1), 5*Integer.valueOf(nofPage));
//			} catch (NumberFormatException | UnknownHostException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//    	}
//    	model.addAttribute("pages", pages);
//    	model.addAttribute("urlMap", "/all/"+text);
//    	try {
//			model.addAttribute("fullPages", new SearchResource().matchAllSearch());
//		} catch (UnknownHostException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//    	
//    	
//    	System.out.println(nofPage+"--------------");
//    	
//    	if(beforePage!=null) model.addAttribute("beforePage",Integer.valueOf(beforePage));
//    	else {
//    		model.addAttribute("beforePage",1);
//    	}
//    	
//    	return "test";
//    }
	
	
	
	
	
    
}
