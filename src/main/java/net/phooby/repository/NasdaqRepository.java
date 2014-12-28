package net.phooby.repository;

import net.phooby.models.Nasdaq;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NasdaqRepository extends MongoRepository<Nasdaq, String> {
    public Nasdaq findByDate(String date);
}
