package com.visitly.visitly.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.visitly.visitly.entity.Item;
import com.visitly.visitly.repository.ItemRepository;

import java.util.List;

@Service
public class ItemService {
  @Autowired
  private ItemRepository itemRepository;

  public List<Item> getAllItems() {
    return itemRepository.findAll();
  }

  public Item getItemById(Long id) {
    return itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
  }

  public Item saveItem(Item item) {
    return itemRepository.save(item);
  }

  public void deleteItem(Long id) {
    itemRepository.deleteById(id);
  }
}