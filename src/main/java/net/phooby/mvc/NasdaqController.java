package net.phooby.mvc;

import net.phooby.models.Nasdaq;
import net.phooby.repository.CustomNasdaqRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/nasdaq")
public class NasdaqController {
    @Autowired
    private CustomNasdaqRepository customNasdaqRepository;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<Nasdaq>> findInRange(@RequestParam String start, @RequestParam String end) {

        List<Nasdaq> results = this.customNasdaqRepository.findInDateRange(start, end);

        if (results == null || results.size() == 0) {
            return new ResponseEntity<List<Nasdaq>>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<List<Nasdaq>>(results, HttpStatus.OK);
    }
}
