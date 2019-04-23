/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.repositories;

/**
 *  This class is the CarRepository, which extends CrudRepository.
 * @author Sass Endre
 */
 
import hu.elte.CarRental.entities.Car;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends CrudRepository<Car, Integer> {
    /**
     * This method returns a Car by its plate number.
     * @param plateNum
     * @return 
     */
    Optional<Car> findByPlateNum(String plateNum);
    
    /**
     * This method returns all of the avaliable cars.
     * @param isAvaliable
     * @return 
     */
    public Iterable<Car> findByIsAvaliable(boolean isAvaliable);
}

