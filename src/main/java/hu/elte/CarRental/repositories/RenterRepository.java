package hu.elte.CarRental.repositories;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *  This class is the RenterRepository, which extends CrudRepository.
 * @author Sass Endre
 */
 
import hu.elte.CarRental.entities.Renter;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RenterRepository extends CrudRepository<Renter, Integer> {
    /**
     * This method returns a Renter by its full name.
     * @param fullName
     * @return 
     */
    Optional<Renter> findByFullName(String fullName);
}
