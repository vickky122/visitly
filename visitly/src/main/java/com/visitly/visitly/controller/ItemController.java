package com.visitly.visitly.controller;

import com.visitly.visitly.entity.Item;
import com.visitly.visitly.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {
  @Autowired
  private ItemService itemService;

  @GetMapping
  public List<Item> getAllItems() {
    return itemService.getAllItems();
  }

  @GetMapping("/{id}")
  public Item getItemById(@PathVariable Long id) {
    return itemService.getItemById(id);
  }

  @PostMapping
  public Item createItem(@RequestBody Item item) {
    return itemService.saveItem(item);
  }

  @DeleteMapping("/{id}")
  public void deleteItem(@PathVariable Long id) {
    itemService.deleteItem(id);
  }
}