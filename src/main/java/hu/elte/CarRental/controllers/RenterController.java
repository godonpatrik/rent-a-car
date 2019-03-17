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

/**
 *
 * @author József
 */

@RestController
@RequestMapping("/rentals")
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
}
