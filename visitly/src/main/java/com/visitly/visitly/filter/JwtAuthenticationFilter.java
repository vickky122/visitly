// package com.visitly.visitly.filter;

// import java.io.IOException;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpHeaders;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import com.visitly.visitly.security.JwtTokenProvider;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// @Component
// public class JwtAuthenticationFilter extends OncePerRequestFilter {
// @Autowired
// private JwtTokenProvider tokenProvider;

// @Override
// protected void doFilterInternal(HttpServletRequest request,
// HttpServletResponse response, FilterChain filterChain)
// throws ServletException, IOException {
// String token = extractToken(request);

// if (token != null && tokenProvider.validateToken(token)) {
// Authentication authentication = tokenProvider.getAuthentication(token);
// SecurityContextHolder.getContext().setAuthentication(authentication);
// }

// filterChain.doFilter(request, response);
// }

// private String extractToken(HttpServletRequest request) {
// String header = request.getHeader(HttpHeaders.AUTHORIZATION);
// if (header != null && header.startsWith("Bearer ")) {
// return header.substring(7);
// }
// return null;
// }
// }
