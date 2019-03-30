/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.controllers;

import hu.elte.CarRental.entities.User;
import hu.elte.CarRental.repositories.UserRepository;
import hu.elte.CarRental.security.AuthenticatedUser;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Patrik
 */

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired 
    private AuthenticatedUser authenticatedUser;
    @Autowired
    private UserRepository userRepository;
    
    @PostMapping("register")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUserName(user.getUserName());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody User user) {
        return ResponseEntity.ok(authenticatedUser.getUser());
    }
    
}
