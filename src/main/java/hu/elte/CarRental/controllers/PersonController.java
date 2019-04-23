/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.controllers;

import hu.elte.CarRental.entities.Person;
import hu.elte.CarRental.repositories.PersonRepository;
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
 *  This class is the PersonController, which provides 5 end points.
 * 
 * @author József
 */

@CrossOrigin
@RestController
@RequestMapping("/persons")
public class PersonController {
    
    @Autowired
    private PersonRepository personRepository;

    /**
     * This method returns all of the Persons in the database.
     * @return 
     */
    @GetMapping("")
    public ResponseEntity<Iterable<Person>> getAll() {
        return ResponseEntity.ok(personRepository.findAll());
    }

    /**
     * This method returns the Person with the given id.
     * @param id
     * @return ResponseEntity
     */
    @GetMapping("/{id}")
    public ResponseEntity<Person> get(@PathVariable Integer id) {
        Optional<Person> person = personRepository.findById(id);
        if (person.isPresent()) {
            return ResponseEntity.ok(person.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    /**
     * This method posts a Person to the database.
     * @param person
     * @return ResponseEntity
     */
    @PostMapping("")
    public ResponseEntity<Person> post(@RequestBody Person person) {
        //User user = authenticatedUser.getUser();
        //person.setUser(user);
        Person savedPerson = personRepository.save(person);
        return ResponseEntity.ok(savedPerson);
    }
    /**
     * This method puts a Person to the database.
     * @param id
     * @param person
     * @return ResponseEntity
     */
    @PutMapping("/{id}")
    public ResponseEntity<Person> update
            (@PathVariable Integer id,
             @RequestBody Person person) {
        Optional<Person> oPerson = personRepository.findById(id);
        if (oPerson.isPresent()) {
            person.setId(id);
            return ResponseEntity.ok(personRepository.save(person));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    /**
     * This method deletes the Person with the given id.
     * @param id
     * @return ResponseEntity
     */        
    @DeleteMapping("/{id}")
    public ResponseEntity<Person> delete
            (@PathVariable Integer id) {
        Optional<Person> oPerson = personRepository.findById(id);
        if (oPerson.isPresent()) {
            personRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
