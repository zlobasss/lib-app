package com.example.libservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Adjust the mapping if necessary
                .allowedOrigins("*")// The URL of your Next.js app
                .allowedMethods("GET", "POST", "DELETE", "PUT") // Add other methods if needed
                .allowedHeaders("*");
    }
}
