/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Patrik
 * Created: 11-Mar-2019
 */

insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Nagy Laszlo', 12345,'00001111', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Kiss Anna', 12346,'00001112', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Kovács Peter', 12347,'00001113', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Nemeth Emese', 12348,'00001114', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into car (plate_num, year_of_make, km, color, start_of_parking, end_of_parking, created_at, updated_at) values ('ABC-123', 2005, 200000, 'black', '2019-02-30', '2019-03-10', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into renter (full_name, id_card_number, bank_account_number, start_of_rent, end_of_rent, created_at, updated_at) values ('Kiss Jozsef', 22222, '11112222', '2019-03-03', '2019-03-09', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
