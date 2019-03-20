/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.controllers;

import hu.elte.CarRental.entities.Car;
import hu.elte.CarRental.repositories.CarRepository;
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
@RequestMapping("/cars")
public class CarController {
    
    @Autowired
    private CarRepository carRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Car>> getAll() {
        return ResponseEntity.ok(carRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> get(@PathVariable Integer id) {
        Optional<Car> car = carRepository.findById(id);
        if (car.isPresent()) {
            return ResponseEntity.ok(car.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<Car> post(@RequestBody Car car) {
        //User user = authenticatedUser.getUser();
        //person.setUser(user);
        Car savedCar = carRepository.save(car);
        return ResponseEntity.ok(savedCar);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Car> update
            (@PathVariable Integer id,
             @RequestBody Car car) {
        Optional<Car> oCar = carRepository.findById(id);
        if (oCar.isPresent()) {
            car.setId(id);
            return ResponseEntity.ok(carRepository.save(car));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @DeleteMapping("/{id}")
    public ResponseEntity<Car> delete
            (@PathVariable Integer id) {
        Optional<Car> oCar = carRepository.findById(id);
        if (oCar.isPresent()) {
            carRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @GetMapping("/avaliable")
    public ResponseEntity<Iterable<Car>> getAvaliable() {
        return ResponseEntity.ok(carRepository.findByIsAvaliable(true));
    }        
}
