package com.training.spring.restapi.mysql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories
@SpringBootApplication
public class SpringBootRestApiMySqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestApiMySqlApplication.class, args);
	}

}
