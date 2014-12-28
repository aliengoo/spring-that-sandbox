package net.phooby.repository;

import net.phooby.models.Nasdaq;

import java.util.List;

public interface CustomNasdaqRepository {
    public List<Nasdaq> findInDateRange(String start, String end);
}
