package com.tpbank.search.ElastichSearch.resource;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSON;
import com.tpbank.search.ElastichSearch.model.Pages;
import com.tpbank.search.crawler.MySpider;

import static org.elasticsearch.index.query.QueryBuilders.*;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.transport.client.PreBuiltTransportClient;




@RestController
@RequestMapping("/rest/search")
public class SearchResource {
	
//
	Client client;

	@SuppressWarnings("resource")
	public SearchResource() throws UnknownHostException {
		client = new PreBuiltTransportClient(
				  Settings.builder().put("client.transport.sniff", true)
				                    .put("cluster.name","elasticsearch").build()) 
				  .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("127.0.0.1"), 9300));
    }
    
	
    @GetMapping("/all")
    public  List<Pages>  matchAllSearch() {
    	SearchResponse response = client.prepareSearch("tpdata").execute().actionGet();
    	List<SearchHit> searchHits = Arrays.asList(response.getHits().getHits());
    	System.out.println(searchHits);
    	System.out.println(searchHits.get(1).getSourceAsString());
    	List<Pages> results = new ArrayList<Pages>();
    	searchHits.forEach(
    	  hit -> results.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	return results;
    }
    
    @GetMapping("/title/{title}")
    public List<Pages> matchTitleSearch(@PathVariable final String title) {
    	QueryBuilder matchTitleQuery = matchQuery(
    	        "title",                                              
    	        title);
    	SearchResponse response = client.prepareSearch("tpdata").setQuery(matchTitleQuery).execute().actionGet();
    	List<SearchHit> searchHits = Arrays.asList(response.getHits().getHits());
    	System.out.println(searchHits);
    	System.out.println(searchHits.get(1).getSourceAsString());
    	List<Pages> results = new ArrayList<Pages>();
    	searchHits.forEach(
    	  hit -> results.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	return results;
    }
    
    @GetMapping("/description/{description}")
    public List<Pages> matchDesriptionSearch(@PathVariable final String description) {
    	QueryBuilder matchTitleQuery = matchQuery(
    	        "description",                                              
    	        description);
    	SearchResponse response = client.prepareSearch("tpdata").setQuery(matchTitleQuery).execute().actionGet();
    	List<SearchHit> searchHits = Arrays.asList(response.getHits().getHits());
    	System.out.println(searchHits);
    	System.out.println(searchHits.get(1).getSourceAsString());
    	List<Pages> results = new ArrayList<Pages>();
    	searchHits.forEach(
    	  hit -> results.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	return results;
    }
    @GetMapping("/crawl")
    public List<Pages> crawler() throws IOException{
    	MySpider spider = new MySpider();
    	DocumentResource doc = new DocumentResource();
    	List<Pages> pages = spider.promotionSpider();
    	doc.insertPage(pages);
    	return pages;
    }
    
    //
	@RequestMapping(value = "/{type}/{text}", method = RequestMethod.GET) 
    public List<Pages> matchWithTypeSearch(@PathVariable final String text,@PathVariable final String type) {
    	QueryBuilder firstMatchTitleQuery = matchQuery(
    	        type,                                              
    	        text);


    	SearchResponse response = client.prepareSearch("tpdata").setQuery(firstMatchTitleQuery).execute().actionGet();
    	List<SearchHit> searchHits = Arrays.asList(response.getHits().getHits());
    	List<Pages> results = new ArrayList<Pages>();
    	searchHits.forEach(
    	  hit -> results.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
   

    	
    	return results;
    }
	
	@RequestMapping(value = "/prefix/{type}/{text}", method = RequestMethod.GET) 
    public List<Pages> prefixMatchWithTypeSearch(@PathVariable final String type,@PathVariable final String text) {
    	QueryBuilder firstMatchTitleQuery = prefixQuery(
    	        type,                                              
    	        text);


    	SearchResponse response = client.prepareSearch("tpdata").setQuery(firstMatchTitleQuery).execute().actionGet();
    	List<SearchHit> searchHits = Arrays.asList(response.getHits().getHits());
    	List<Pages> results = new ArrayList<Pages>();
    	searchHits.forEach(
    	  hit -> results.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
   

    	
    	return results;
    }
	public List<Pages> boolMustSearch(@PathVariable final String text,@PathVariable final String type){

    	QueryBuilder secondMatchTitleQuery = QueryBuilders
                .boolQuery()
                .must(QueryBuilders.termQuery(type,text));
 
    	SearchResponse secondresponse = client.prepareSearch("tpdata").setQuery(secondMatchTitleQuery).execute().actionGet();
    	List<SearchHit> secondsearchHits = Arrays.asList(secondresponse.getHits().getHits());
    	
    	List<Pages> subReults = new ArrayList<Pages>();
    	secondsearchHits.forEach(
    	  hit -> subReults.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	return subReults;
    	
	}
	
	@RequestMapping(value = "/{type}/{text}/must/tag/{textTag}", method = RequestMethod.GET) 
    public List<Pages> mustMatchTypeSearchWithTag(@PathVariable final String type,@PathVariable final String text,@PathVariable final String textTag) {
    	QueryBuilder query = QueryBuilders
                .boolQuery()
                .must(QueryBuilders.termQuery(type,text))
                .must(QueryBuilders.termQuery("tag","cho vay"));

 
    	SearchResponse secondresponse = client.prepareSearch("tpdata").setQuery(query).execute().actionGet();
    	List<SearchHit> secondsearchHits = Arrays.asList(secondresponse.getHits().getHits());
    	
    	List<Pages> pages = new ArrayList<Pages>();
    	secondsearchHits.forEach(
    	  hit -> pages.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	
    	return pages;
    }
	
	@RequestMapping(value = "/{type}/{text}/mustnot/tag/{textTag}", method = RequestMethod.GET) 
    public List<Pages> mustNotMatchTypeSearchWithTag(@PathVariable final String type,@PathVariable final String text,@PathVariable final String textTag) {
    	QueryBuilder query = QueryBuilders
                .boolQuery()
                .must(QueryBuilders.termQuery(type,text))
                .mustNot(QueryBuilders.termQuery("tag","cho vay"));

 
    	SearchResponse secondresponse = client.prepareSearch("tpdata").setQuery(query).execute().actionGet();
    	List<SearchHit> secondsearchHits = Arrays.asList(secondresponse.getHits().getHits());
    	
    	List<Pages> pages = new ArrayList<Pages>();
    	secondsearchHits.forEach(
    	  hit -> pages.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	
    	return pages;
    }
	
	@RequestMapping(value = "/boost/{type}/{text}/{boostWord}", method = RequestMethod.GET) 
    public List<Pages> boostMatchSearch(@PathVariable final String type,@PathVariable final String text,@PathVariable final String boostWord) {
    	QueryBuilder query = QueryBuilders
                .boolQuery()
                .must(QueryBuilders.termQuery(type,text))
                .should(QueryBuilders.termQuery(type,boostWord))
                .boost(2.0f);
    	SearchResponse secondresponse = client.prepareSearch("tpdata").setQuery(query).execute().actionGet();
    	List<SearchHit> secondsearchHits = Arrays.asList(secondresponse.getHits().getHits());
    	
    	List<Pages> pages = new ArrayList<Pages>();
    	secondsearchHits.forEach(
    	  hit -> pages.add(JSON.parseObject(hit.getSourceAsString(), Pages.class)));
    	
    	return pages;
    }
	
}
