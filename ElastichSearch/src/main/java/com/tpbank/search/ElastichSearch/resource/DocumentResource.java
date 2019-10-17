package com.tpbank.search.ElastichSearch.resource;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.delete.DeleteResponse;
import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.update.UpdateRequest;
import org.elasticsearch.action.update.UpdateResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpbank.search.ElastichSearch.model.Pages;
import com.tpbank.search.crawler.MySpider;

import static org.elasticsearch.common.xcontent.XContentFactory.jsonBuilder;

@RestController
@RequestMapping("/rest/pages/client")
public class DocumentResource {	
	Client client;
//
	@SuppressWarnings("resource")
	public DocumentResource() throws UnknownHostException {
		client = new PreBuiltTransportClient(
				  Settings.builder().put("client.transport.sniff", true)
				                    .put("cluster.name","elasticsearch").build()) 
				  .addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("127.0.0.1"), 9300));
    }
//    
    @GetMapping("/insert/{id}")
    public String insert(@PathVariable final String id) throws IOException {

        IndexResponse response = client.prepareIndex("tpdata", "demo")
                .setSource(jsonBuilder()
                        .startObject()
                        .field("id",id)
                        .field("title", "SỞ HỮU XE 4 BÁNH CỰC DỄ VÌ TPBANK ĐÃ CHO VAY TỚI 80% GIÁ TRỊ XE!")
                        .field("description", "Xe 4 bánh chắc chỉ dành cho những người làm sếp”, “Mình sẽ đợi khi nào giá xe tại Việt Nam bớt đắt đỏ thì mới dám mua!” – đừng để những suy nghĩ cũ kỹ đó cản trở ước mơ của bạn" )
                        .field("tag", "cho vay")
                        .field("url", "https://tpb.vn/khuyen-mai/cho-vay/vay-mua-o-to")
                        .endObject()
                )
                .get();
        return response.getResult().toString();
    }
    
    @GetMapping("/index/insert")
    public void insertSource() throws IOException {
    	List<Pages> pages = new ArrayList<Pages>();
    	MySpider spider = new MySpider();
    	pages = spider.promotionSpider();
        for(int i =0;i<pages.size();i++) {
            client.prepareIndex("tpdata", "demo")
                    .setSource(jsonBuilder()
                            .startObject()
                            .field("id",i)
                            .field("title", pages.get(i).getTitle())
                            .field("description",pages.get(i).getDescription() )
                            .field("tag",pages.get(i).getTag())
                            .field("url", pages.get(i).getUrl())
                            .endObject()
                    )
                    .get();
            }
        }

//    
    public String insertPage( List<Pages> pages) throws IOException {
        for(int i= 0;i<pages.size();i++) {
            client.prepareIndex("tpdata", "demo")
                    .setSource(jsonBuilder()
                            .startObject()
                            .field("id",pages.get(i).getId())
                            .field("title",pages.get(i).getTitle())
                            .field("description",pages.get(i).getDescription())
                            .field("tag", pages.get(i).getTag())
                            .field("url", pages.get(i).getUrl())
                            .endObject()
                    )
                    .get();
        }

        return "Created";
    }
//    
    @GetMapping("/view/{id}")
    public Map<String, Object> view(@PathVariable final String id) {
        GetResponse getResponse = client.prepareGet("tpdata", "demo", id).get();

        System.out.println(getResponse.getSource().get("title"));
        return getResponse.getSource();
    }
//    
    @RequestMapping(value = "/update/{id}", method = RequestMethod.POST) 
    public String update(@PathVariable final String id, @RequestBody Pages page) throws IOException {

        UpdateRequest updateRequest = new UpdateRequest();
        updateRequest.index("tpdata")
                .type("demo")
                .id(id)
                .doc(jsonBuilder()
                        .startObject()
                        .field("title", page.getTitle())
                        .endObject());
        try {
            UpdateResponse updateResponse = client.update(updateRequest).get();
            System.out.println(updateResponse.status());
            	 updateResponse.status().toString();
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e);
        }
        return "Updated";
    }
//    
//    
    @GetMapping("/delete/{id}")
    public String delete(@PathVariable final String id) {

        DeleteResponse deleteResponse = client.prepareDelete("tpdata", "demo", id).get();

        System.out.println(deleteResponse.getResult().toString());
        return deleteResponse.getResult().toString();
    }
    
    
//    @GetMapping("/test")
//    public List<Pages> test(){
//    	MySpider spider = new MySpider();
//    	
//    	return 
//    	
//    }
}
