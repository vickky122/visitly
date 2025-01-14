// package com.visitly.visitly.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.visitly.visitly.entity.User;
// import com.visitly.visitly.security.JwtTokenProvider;
// import com.visitly.visitly.service.UserService;

// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {
// @Autowired
// private UserService userService;
// @Autowired
// private JwtTokenProvider tokenProvider;
// //
// @PostMapping("/login")
// public ResponseEntity<?> authenticate(@RequestBody User user) {
// User foundUser = userService.findByUsername(user.getUsername());
// if (foundUser != null && foundUser.getPassword().equals(user.getPassword()))
// {
// String token = tokenProvider.generateToken(foundUser);
// return ResponseEntity.ok(new JwtResponse(token));
// }
// return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
// }
// }
