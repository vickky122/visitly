package com.visitly.visitly.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**") // Allow all endpoints
        .allowedOrigins("http://localhost:5173") // Allow requests from your frontend
        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow all necessary HTTP methods
        .allowedHeaders("*") // Allow all headers
        .allowCredentials(true); // Allow credentials (important for JWT tokens)
  }
}
