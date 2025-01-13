package com.visitly.visitly.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @SuppressWarnings({ "removal", "deprecation" })
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeRequests()
        .requestMatchers("/login", "/home", "/about").permitAll()
        .anyRequest().authenticated()
        .and()
        .oauth2Login()
        .loginPage("/login")
        .defaultSuccessUrl("/home", true);
    return http.build();
  }
}
