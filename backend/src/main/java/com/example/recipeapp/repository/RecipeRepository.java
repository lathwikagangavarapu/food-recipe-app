package com.example.recipeapp.repository;

import com.example.recipeapp.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findByCategory(String category);
    List<Recipe> findByDiet(String diet);
    List<Recipe> findByRegion(String region);
}