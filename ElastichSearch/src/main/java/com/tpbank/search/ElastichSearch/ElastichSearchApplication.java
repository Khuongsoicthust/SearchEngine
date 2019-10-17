package com.tpbank.search.ElastichSearch;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class ElastichSearchApplication extends SpringBootServletInitializer {
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ElastichSearchApplication.class);
    }
	public static void main(String[] args) {
		SpringApplication.run(ElastichSearchApplication.class, args);
	}

}
