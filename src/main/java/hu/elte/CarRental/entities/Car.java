/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.CarRental.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 *
 * @author Patrik
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Car {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name="PLATE_NUM")
    @NotNull
    private String plateNum;
    
    @Column(name="YEAR_OF_MAKE")
    @NotNull
    private int yearOfMake;
    
    @Column(name="KM")
    @NotNull
    private int km;
    
    @Column(name="COLOR")
    @NotNull
    private String color;
    
    @Column(name="IS_AVALIABLE")
    @NotNull
    private boolean isAvaliable;
    
    @Column(name="START_OF_PARKING")
    @NotNull
    private String startOfParking;
    
    @Column(name="END_OF_PARKING")
    @NotNull
    private String endOfParking;
    
    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime created_at;

    @Column
    @UpdateTimestamp
    private LocalDateTime updated_at;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Person person;
    
    @OneToMany(mappedBy = "car")
    private List<Renter> renters;
}
