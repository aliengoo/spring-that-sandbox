package net.phooby.repository;

import net.phooby.models.Nasdaq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

public class CustomNasdaqRepositoryImpl implements CustomNasdaqRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Nasdaq> findInDateRange(String start, String end) {

        Query query = query(where("Date").gte(start).lte(end));

        return mongoTemplate.find(query, Nasdaq.class);
    }
}
