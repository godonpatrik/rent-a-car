/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.controllers;


import hu.elte.CarRental.entities.Renter;
import hu.elte.CarRental.repositories.RentalRepository;
import java.time.LocalDateTime;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 *
 * @author József
 */

@RestController
@RequestMapping("/rentals")
public class RentalController {
    
    @Autowired
    private RentalRepository rentalRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Renter>> getAll() {
        return ResponseEntity.ok(rentalRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Renter> get(@PathVariable Integer id) {
        Optional<Renter> renter = rentalRepository.findById(id);
        if (renter.isPresent()) {
            return ResponseEntity.ok(renter.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
