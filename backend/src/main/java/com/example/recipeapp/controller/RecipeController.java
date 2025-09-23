package com.example.recipeapp.controller;

import com.example.recipeapp.entity.Recipe;
import com.example.recipeapp.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Long id) {
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        return recipe.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeService.saveRecipe(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe) {
        if (!recipeService.getRecipeById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        recipe.setId(id);
        return ResponseEntity.ok(recipeService.saveRecipe(recipe));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        if (!recipeService.getRecipeById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        recipeService.deleteRecipe(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/category/{category}")
    public List<Recipe> getRecipesByCategory(@PathVariable String category) {
        return recipeService.getRecipesByCategory(category);
    }

    @GetMapping("/diet/{diet}")
    public List<Recipe> getRecipesByDiet(@PathVariable String diet) {
        return recipeService.getRecipesByDiet(diet);
    }

    @GetMapping("/region/{region}")
    public List<Recipe> getRecipesByRegion(@PathVariable String region) {
        return recipeService.getRecipesByRegion(region);
    }
}