/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.repositories;

import hu.elte.CarRental.entities.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *  This class is the UserRepository, which extends CrudRepository.
 * @author Patrik
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    /**
     * This method return a User by its username.
     * @param username
     * @return 
     */
    Optional<User> findByUserName(String username);
}
