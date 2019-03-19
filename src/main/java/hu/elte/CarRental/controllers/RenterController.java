/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.controllers;

import hu.elte.CarRental.entities.Renter;
import hu.elte.CarRental.repositories.RenterRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author József
 */

@CrossOrigin
@RestController
@RequestMapping("/renters")
public class RenterController {
    
    @Autowired
    private RenterRepository renterRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Renter>> getAll() {
        return ResponseEntity.ok(renterRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Renter> get(@PathVariable Integer id) {
        Optional<Renter> renter = renterRepository.findById(id);
        if (renter.isPresent()) {
            return ResponseEntity.ok(renter.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Renter> post(@RequestBody Renter renter) {
        //User user = authenticatedUser.getUser();
        //person.setUser(user);
        Renter savedRenter = renterRepository.save(renter);
        return ResponseEntity.ok(savedRenter);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Renter> update
            (@PathVariable Integer id,
             @RequestBody Renter renter) {
        Optional<Renter> oRenter = renterRepository.findById(id);
        if (oRenter.isPresent()) {
            renter.setId(id);
            return ResponseEntity.ok(renterRepository.save(renter));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @DeleteMapping("/{id}")
    public ResponseEntity<Renter> delete
            (@PathVariable Integer id) {
        Optional<Renter> oRenter = renterRepository.findById(id);
        if (oRenter.isPresent()) {
            renterRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
