package com.tpbank.search.ElastichSearch.model;


public class Pages {

    private String title;
    private Long id;
    private String description;
    private String tag;
    private String url;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Pages(Long id,String title,  String description, String tag,String uri) {
        super();	
        this.title = title;
        this.id = id;
        this.description = description;
        this.tag = tag;
        this.url = uri;
    }

    public Pages() {

    }

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	public String toString() {
		return getTitle()+"---"+getTag();
	}
}
