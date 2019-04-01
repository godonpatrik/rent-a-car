package hu.elte.CarRental;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@RunWith(SpringRunner.class)
@SpringBootTest
public class CarRentalApplicationTests {
    
        @Autowired
        private WebApplicationContext context;

        private MockMvc mockMvc;

	@Before
        public void contextLoads() {
            this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
        }
        
        // Person tests
        
        @Test
        public void getAllPersonTest() throws Exception {
            String url = new StringBuilder().append("/persons").toString();
            /*
            RequestBuilder requestBuilder = MockMvcRequestBuilders.get(url);
            MvcResult result = mockMvc.perform(requestBuilder).andReturn();
            MockHttpServletResponse response = result.getResponse();
            assertEquals(HttpStatus.OK.value(), response.getStatus());
            */
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getPersonTest() throws Exception {
            String url = new StringBuilder().append("/persons/2").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getPersonIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/persons/200").toString();
            mockMvc.perform(get(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Test
        public void deletePersonTest() throws Exception {
            String url = new StringBuilder().append("/persons/1").toString();
            mockMvc.perform(delete(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void deletePersonIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/persons/100").toString();
            mockMvc.perform(delete(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Data
        static class PersonModel {
            public String fullName;
            public int idCardNumber;
            public String bankAccountNumber;
        }
        
        @Test
        public void putPersonTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            PersonModel model = new PersonModel();
            model.setFullName("Kis Jánoss");
            model.setIdCardNumber(1231236523);
            model.setBankAccountNumber("12341243-412132-124321");
            String url = new StringBuilder().append("/persons/3").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void putPersonIdNotInDbTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            PersonModel model = new PersonModel();
            model.setFullName("Kiss Jánoss");
            model.setIdCardNumber(1231236523);
            model.setBankAccountNumber("12341243-412132-124321");
            String url = new StringBuilder().append("/persons/300").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
                
        @Test
        public void postPersonTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            PersonModel model = new PersonModel();
            model.setFullName("Kis János");
            model.setIdCardNumber(123123123);
            model.setBankAccountNumber("12341243-412132-124321");
            String url = new StringBuilder().append("/persons").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        // Renter tests
                
        @Test
        public void getAllRentersTest() throws Exception {
            String url = new StringBuilder().append("/renters").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
                
        @Test
        public void getRenterTest() throws Exception {
            String url = new StringBuilder().append("/renters/2").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getRenterIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/renters/200").toString();
            mockMvc.perform(get(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Test
        public void deleteRenterTest() throws Exception {
            String url = new StringBuilder().append("/renters/1").toString();
            mockMvc.perform(delete(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void deleteRenterIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/renters/100").toString();
            mockMvc.perform(delete(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Data
        static class RenterModel {
            public String fullName;
            public int idCardNumber;
            public String bankAccountNumber;
            public String startOfRent;
            public String endOfRent;
        }
        
        @Test
        public void postRenterTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            RenterModel model = new RenterModel();
            model.setFullName("Kis Zsombor");
            model.setIdCardNumber(12151215);
            model.setBankAccountNumber("23425243-4345132-123472");
            model.setStartOfRent("2019-04-01");
            model.setEndOfRent("2019-04-05");
            String url = new StringBuilder().append("/renters").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void putRenterTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            RenterModel model = new RenterModel();
            model.setFullName("Kis Károly");
            model.setIdCardNumber(121512135);
            model.setBankAccountNumber("23425243-43255132-123472");
            model.setStartOfRent("2019-04-04");
            model.setEndOfRent("2019-04-05");
            String url = new StringBuilder().append("/renters/3").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void putRenterIdNotInDbTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            RenterModel model = new RenterModel();
            model.setFullName("Kis Károly");
            model.setIdCardNumber(121512135);
            model.setBankAccountNumber("23425243-43255132-123472");
            model.setStartOfRent("2019-04-04");
            model.setEndOfRent("2019-04-05");
            String url = new StringBuilder().append("/renters/300").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        // Car tests
        
        @Test
        public void getAllCarsTest() throws Exception {
            String url = new StringBuilder().append("/cars").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getCarTest() throws Exception {
            String url = new StringBuilder().append("/cars/2").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getCarIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/cars/200").toString();
            mockMvc.perform(get(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Test
        public void deleteCarTest() throws Exception {
            String url = new StringBuilder().append("/cars/1").toString();
            mockMvc.perform(delete(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void deleteCarIdNotInDbTest() throws Exception {
            String url = new StringBuilder().append("/cars/100").toString();
            mockMvc.perform(delete(url)).andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Data
        static class CarModel {
            public String plateNum;
            public int yearOfMake;
            public int km;
            public String color;
            public boolean isAvaliable;
            public String startOfParking;
            public String endOfParking;
        }
        
        @Test
        public void putCarTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            CarModel model = new CarModel();
            model.setPlateNum("ASDS-1234");
            model.setYearOfMake(1998);
            model.setKm(350000);
            model.setColor("black");
            model.setAvaliable(false);
            model.setStartOfParking("2019-03-26");
            model.setEndOfParking("2019-04-01");
            String url = new StringBuilder().append("/cars/3").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void putCarIdNotInDbTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            CarModel model = new CarModel();
            model.setPlateNum("ASDS-1234");
            model.setYearOfMake(1998);
            model.setKm(350000);
            model.setColor("black");
            model.setAvaliable(false);
            model.setStartOfParking("2019-03-26");
            model.setEndOfParking("2019-04-01");
            String url = new StringBuilder().append("/cars/300").toString();
            mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isNotFound()).andDo(print()).andReturn();
        }
        
        @Test
        public void postCarTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            CarModel model = new CarModel();
            model.setPlateNum("ASD-123");
            model.setYearOfMake(2000);
            model.setKm(300000);
            model.setColor("black");
            model.setAvaliable(true);
            model.setStartOfParking("2019-03-20");
            model.setEndOfParking("2019-04-01");
            String url = new StringBuilder().append("/cars").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void getAvaliableCarsTest() throws Exception {
            String url = new StringBuilder().append("/cars/avaliable").toString();
            mockMvc.perform(get(url)).andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        // User tests
        
        @Data
        static class UserModel {
            public String userName;
            public String password;
            public boolean enabled;
        }
        
        @Test
        public void loginTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            UserModel model = new UserModel();
            model.setUserName("admin");
            model.setPassword("password");
            model.setEnabled(true);
            String url = new StringBuilder().append("/users/login").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
                
        @Test
        public void registerTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            UserModel model = new UserModel();
            model.setUserName("testUser");
            model.setPassword("asd");
            model.setEnabled(true);
            String url = new StringBuilder().append("/users/register").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isOk()).andDo(print()).andReturn();
        }
        
        @Test
        public void registerExistingUsernameTest() throws Exception {
            ObjectMapper mapper = new ObjectMapper();
            UserModel model = new UserModel();
            model.setUserName("admin");
            model.setPassword("asd");
            model.setEnabled(true);
            String url = new StringBuilder().append("/users/register").toString();
            mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(model)))
                    .andExpect(status().isBadRequest()).andDo(print()).andReturn();
        }
              
}
