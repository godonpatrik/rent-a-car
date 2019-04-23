package hu.elte.CarRental.repositories;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *  This class is the PersonRepository, which extends CrudRepository.
 * @author Sass Endre
 */
 
import hu.elte.CarRental.entities.Person;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
    /**
     * This method returns a Person by its full name.
     * @param fullName
     * @return 
     */
    Optional<Person> findByFullName(String fullName);
}

