package com.visitly.visitly.repository;

import com.visitly.visitly.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
