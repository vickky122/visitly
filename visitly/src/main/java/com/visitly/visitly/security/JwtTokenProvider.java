package com.visitly.visitly.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import com.visitly.visitly.entity.User;

import java.util.Date;
import java.util.List;

@Component
public class JwtTokenProvider {
  private final String secretKey = "GOOGLE_CLIENT_SECRET";

  // Generate JWT token
  public String generateToken(User user) {
    return Jwts.builder()
        .setSubject(user.getUsername())
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 24 hours
        .signWith(SignatureAlgorithm.HS512, secretKey.getBytes())
        .compact();
  }

  // Extract Authentication from JWT
  public Authentication getAuthentication(String token) {
    User user = new User();
    user.setUsername(getUsernameFromToken(token));
    return new UsernamePasswordAuthenticationToken(
        user,
        "",
        List.of(new SimpleGrantedAuthority(user.getRole())));
  }

  // Validate JWT token
  public boolean validateToken(String token) {
    try {
      Jwts.parser()
          .setSigningKey(secretKey.getBytes())
          .parseClaimsJws(token);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  // Extract username from JWT
  public String getUsernameFromToken(String token) {
    Claims claims = Jwts.parser()
        .setSigningKey(secretKey.getBytes())
        .parseClaimsJws(token)
        .getBody();
    return claims.getSubject();
  }
}
