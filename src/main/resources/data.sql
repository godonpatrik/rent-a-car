/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Patrik
 * Created: 11-Mar-2019
 */

/*
insert into user (user_name, password, enabled) values ('admin', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true);
insert into user (user_name,  password, enabled) values ('user1', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true); 
insert into user (user_name,  password, enabled) values ('user2', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', true); */

insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Nagy Laszlo', 12345,'00001111', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Kiss Anna', 12346,'00001112', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Kovacs Peter', 12347,'00001113', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into person (full_name, id_card_number, bank_account_number, created_at, updated_at) values ('Nemeth Emese', 12348,'00001114', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into car (plate_num, year_of_make, km, color, is_avaliable ,start_of_parking, end_of_parking, created_at, updated_at) values ('ABC-123', 2005, 200000, 'black', true, '2019-02-30', '2019-03-10', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into car (plate_num, year_of_make, km, color, is_avaliable ,start_of_parking, end_of_parking, created_at, updated_at) values ('BBB-123', 2007, 160000, 'white', true, '2019-03-04', '2019-03-15', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into car (plate_num, year_of_make, km, color, is_avaliable ,start_of_parking, end_of_parking, created_at, updated_at) values ('CCC-123', 2015, 50000, 'grey', true, '2019-02-07', '2019-03-16', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

insert into renter (full_name, id_card_number, bank_account_number, start_of_rent, end_of_rent, created_at, updated_at) values ('Kiss Jozsef', 22222, '11112222', '2019-03-03', '2019-03-09', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into renter (full_name, id_card_number, bank_account_number, start_of_rent, end_of_rent, created_at, updated_at) values ('Nagy Mihaly', 33333, '11112223', '2019-03-04', '2019-03-10', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
insert into renter (full_name, id_card_number, bank_account_number, start_of_rent, end_of_rent, created_at, updated_at) values ('Elek Anita', 44444, '11112224', '2019-03-05', '2019-03-12', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
