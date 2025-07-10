package com.personal.budget_plus;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BudgetPlusApplication 
{

	public static void main(String[] args) 
        {
		SpringApplication.run(BudgetPlusApplication.class, args);
	}
        /*@Bean
        public CommandLineRunner dataSeeder(TestRepository testRepository) {
        return args -> {
            testRepository.save(new DBTest("Screwdriver", 25));
            testRepository.save(new DBTest("Wrench", 15));
            testRepository.deleteAll();
        };
    }*/
}
