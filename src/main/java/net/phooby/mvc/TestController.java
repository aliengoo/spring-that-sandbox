package net.phooby.mvc;

import net.phooby.models.Customer;
import net.phooby.models.Nasdaq;
import net.phooby.repository.CustomNasdaqRepository;
import net.phooby.repository.CustomerRepository;
import net.phooby.repository.NasdaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private NasdaqRepository nasdaqRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomNasdaqRepository customNasdaqRepository;

    @RequestMapping(value="/customer", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public ResponseEntity<Customer> customer() {

        Customer customer = new Customer();
        customer.setLastName("Simpson");
        customer.setFirstName("Homer");

        return new ResponseEntity<Customer>(customerRepository.save(customer), HttpStatus.OK);
    }

    @RequestMapping(value="/{date}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public ResponseEntity<Nasdaq> findByDate(@PathVariable String date, HttpServletResponse servletResponse) {
        Nasdaq nasdaq = nasdaqRepository.findByDate(date);

        ResponseEntity<Nasdaq> response;

        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.set("myheader", "myheadervalue");

        if (nasdaq == null) {
            response = new ResponseEntity<Nasdaq>(HttpStatus.NOT_FOUND);
        } else {
            response = new ResponseEntity<Nasdaq>(nasdaq, httpHeaders, HttpStatus.OK);
        }

        servletResponse.addCookie(new Cookie("mycookie", "mycookedvalue"));

        return response;
    }

    @RequestMapping(value="/range", method = RequestMethod.GET)
    @ResponseBody
    public List<Nasdaq> findInRange(@RequestParam String start, @RequestParam String end) {
        return this.customNasdaqRepository.findInDateRange(start, end);
    }
}
