package com.example.recipeapp;

import com.example.recipeapp.entity.Recipe;
import com.example.recipeapp.repository.RecipeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class RecipeAppBackendApplication implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(RecipeAppBackendApplication.class);

    @Autowired
    private RecipeRepository recipeRepository;

    public static void main(String[] args) {
        SpringApplication.run(RecipeAppBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Starting CommandLineRunner to initialize recipes");
        try {
            long count = recipeRepository.count();
            logger.info("Current recipe count: {}", count);
            if (count == 0) {
                logger.info("No recipes found, adding default recipes");
            // Rice Varieties
            addRecipe("Plain White Rice", "Simple boiled white rice.", "🍚", "20 mins", "Easy", "Veg", "Indian", "Rice Varieties",
                Arrays.asList("Rice", "Water", "Salt"), Arrays.asList("Rinse rice", "Boil water", "Cook rice"), "Basic carbs");
            addRecipe("Lemon Rice", "Rice flavored with lemon and spices.", "🍋", "25 mins", "Easy", "Veg", "South India", "Rice Varieties",
                Arrays.asList("Rice", "Lemon", "Mustard seeds", "Curry leaves", "Chili"), Arrays.asList("Cook rice", "Temper spices", "Mix"), "Citrus flavor");
            addRecipe("Tamarind Rice", "Rice mixed with tamarind paste and spices.", "🍅", "30 mins", "Medium", "Veg", "South India", "Rice Varieties",
                Arrays.asList("Rice", "Tamarind", "Spices", "Peanuts"), Arrays.asList("Cook rice", "Make paste", "Mix"), "Tangy taste");
            addRecipe("Curd Rice", "Rice mixed with yogurt and spices.", "🥛", "15 mins", "Easy", "Veg", "South India", "Rice Varieties",
                Arrays.asList("Rice", "Yogurt", "Milk", "Spices"), Arrays.asList("Cook rice", "Mix with yogurt", "Add spices"), "Cooling dish");
            addRecipe("Tomato Rice", "Rice cooked with tomatoes and spices.", "🍅", "30 mins", "Easy", "Veg", "Indian", "Rice Varieties",
                Arrays.asList("Rice", "Tomatoes", "Onion", "Spices"), Arrays.asList("Sauté veggies", "Add rice and water", "Cook"), "Tangy rice");
            addRecipe("Coconut Rice", "Rice cooked with coconut milk.", "🥥", "25 mins", "Easy", "Veg", "South India", "Rice Varieties",
                Arrays.asList("Rice", "Coconut milk", "Spices"), Arrays.asList("Cook rice in coconut milk", "Add spices"), "Creamy rice");
            addRecipe("Biryani", "Spiced rice with meat.", "🍚", "60 mins", "Hard", "Non-Veg", "Indian", "Rice Varieties",
                Arrays.asList("Rice", "Chicken", "Spices", "Onion", "Yogurt"), Arrays.asList("Cook rice", "Fry meat", "Layer and dum cook"), "Aromatic dish");
            addRecipe("Vegetable Pulao", "Rice with vegetables.", "🥕", "40 mins", "Medium", "Veg", "Indian", "Rice Varieties",
                Arrays.asList("Rice", "Vegetables", "Spices", "Ghee"), Arrays.asList("Sauté veggies", "Add rice and water", "Cook"), "Mild spices");
            addRecipe("Pongal", "Rice and lentil dish.", "🍛", "30 mins", "Easy", "Veg", "South India", "Rice Varieties",
                Arrays.asList("Rice", "Moong dal", "Ghee", "Pepper"), Arrays.asList("Cook rice and dal", "Temper"), "Comfort food");
            addRecipe("Bisibele Bath", "Spiced rice and lentil dish.", "🍛", "45 mins", "Medium", "Veg", "Karnataka", "Rice Varieties",
                Arrays.asList("Rice", "Lentils", "Vegetables", "Spices"), Arrays.asList("Cook rice and lentils", "Add spices"), "Spicy rice");

            // Curries
            addRecipe("Sambar", "Lentil stew with vegetables.", "🥘", "45 mins", "Medium", "Veg", "South India", "Curries",
                Arrays.asList("Toor dal", "Vegetables", "Tamarind", "Spices"), Arrays.asList("Cook dal", "Add veggies", "Season"), "Protein rich");
            addRecipe("Rasam", "Spicy tomato soup.", "🍅", "20 mins", "Easy", "Veg", "South India", "Curries",
                Arrays.asList("Tomatoes", "Tamarind", "Spices", "Garlic"), Arrays.asList("Boil tomatoes", "Add spices"), "Digestive soup");
            addRecipe("Dal", "Lentil curry.", "🍛", "30 mins", "Easy", "Veg", "Indian", "Curries",
                Arrays.asList("Lentils", "Spices", "Ghee", "Cilantro"), Arrays.asList("Cook lentils", "Temper spices"), "Simple curry");
            addRecipe("Chicken Curry", "Spicy chicken curry.", "🍗", "50 mins", "Medium", "Non-Veg", "Indian", "Curries",
                Arrays.asList("Chicken", "Spices", "Coconut", "Onion"), Arrays.asList("Brown chicken", "Add spices", "Simmer"), "High protein");
            addRecipe("Mutton Curry", "Mutton in spicy gravy.", "🍖", "60 mins", "Medium", "Non-Veg", "Indian", "Curries",
                Arrays.asList("Mutton", "Spices", "Tomato", "Onion"), Arrays.asList("Cook mutton", "Add spices"), "Rich gravy");
            addRecipe("Fish Curry", "Fish in coconut curry.", "🐟", "40 mins", "Medium", "Non-Veg", "South India", "Curries",
                Arrays.asList("Fish", "Coconut milk", "Spices", "Tamarind"), Arrays.asList("Cook fish", "Add curry"), "Seafood delight");
            addRecipe("Egg Curry", "Boiled eggs in curry.", "🥚", "35 mins", "Easy", "Non-Veg", "Indian", "Curries",
                Arrays.asList("Eggs", "Spices", "Tomato", "Onion"), Arrays.asList("Boil eggs", "Make curry", "Add eggs"), "Protein packed");
            addRecipe("Kootu", "Vegetable and lentil mix.", "🥬", "40 mins", "Medium", "Veg", "South India", "Curries",
                Arrays.asList("Vegetables", "Lentils", "Coconut", "Spices"), Arrays.asList("Cook veggies and lentils", "Grind coconut"), "Healthy mix");
            addRecipe("Avial", "Mixed vegetable curry.", "🥕", "45 mins", "Medium", "Veg", "Kerala", "Curries",
                Arrays.asList("Mixed veggies", "Coconut", "Yogurt", "Spices"), Arrays.asList("Cook veggies", "Add coconut paste"), "Colorful curry");
            addRecipe("Gojju", "Spicy-tangy curry.", "🍅", "35 mins", "Medium", "Veg", "Karnataka", "Curries",
                Arrays.asList("Vegetables", "Tamarind", "Spices", "Jaggery"), Arrays.asList("Cook veggies", "Add tamarind and spices"), "Sweet-sour");

            // Breakfast
            addRecipe("Idli", "Steamed rice cakes.", "🍛", "30 mins", "Easy", "Veg", "South India", "Breakfast",
                Arrays.asList("Rice", "Urad dal", "Water"), Arrays.asList("Make batter", "Ferment", "Steam"), "Light and healthy");
            addRecipe("Dosa", "Crispy crepe.", "🥞", "45 mins", "Medium", "Veg", "South India", "Breakfast",
                Arrays.asList("Rice", "Urad dal", "Potatoes"), Arrays.asList("Make batter", "Cook on griddle"), "Crispy delight");
            addRecipe("Vada", "Fried lentil donuts.", "🍩", "40 mins", "Medium", "Veg", "South India", "Breakfast",
                Arrays.asList("Urad dal", "Spices", "Oil"), Arrays.asList("Grind dal", "Fry"), "Crispy snack");
            addRecipe("Upma", "Semolina dish.", "🍚", "25 mins", "Easy", "Veg", "South India", "Breakfast",
                Arrays.asList("Semolina", "Vegetables", "Spices"), Arrays.asList("Roast semolina", "Cook with veggies"), "Quick meal");
            addRecipe("Pongal", "Rice and lentil breakfast.", "🍛", "35 mins", "Easy", "Veg", "Tamil Nadu", "Breakfast",
                Arrays.asList("Rice", "Moong dal", "Ghee"), Arrays.asList("Cook rice and dal", "Temper"), "Festive dish");
            addRecipe("Appam", "Fermented pancakes.", "🥞", "45 mins", "Medium", "Veg", "Kerala", "Breakfast",
                Arrays.asList("Rice", "Coconut milk", "Yeast"), Arrays.asList("Make batter", "Cook in pan"), "Lacy pancakes");
            addRecipe("Pesarattu", "Green gram dosa.", "🥞", "40 mins", "Medium", "Veg", "Andhra", "Breakfast",
                Arrays.asList("Moong dal", "Onion", "Spices"), Arrays.asList("Make batter", "Cook"), "Protein rich");
            addRecipe("Uttapam", "Thick pancake.", "🥞", "30 mins", "Easy", "Veg", "South India", "Breakfast",
                Arrays.asList("Dosa batter", "Vegetables", "Spices"), Arrays.asList("Spread batter", "Top with veggies"), "Veggie pancake");
            addRecipe("Rava Dosa", "Semolina crepe.", "🥞", "25 mins", "Easy", "Veg", "Karnataka", "Breakfast",
                Arrays.asList("Semolina", "Rice flour", "Spices"), Arrays.asList("Make batter", "Cook"), "Quick dosa");
            addRecipe("Poori", "Fried bread with curry.", "🥟", "45 mins", "Medium", "Veg", "North India", "Breakfast",
                Arrays.asList("Flour", "Oil", "Water", "Potatoes", "Spices"), Arrays.asList("Make dough", "Fry", "Serve with curry"), "Festive breakfast");

            // Snacks
            addRecipe("Bonda", "Fried potato balls.", "🥔", "40 mins", "Medium", "Veg", "South India", "Snacks",
                Arrays.asList("Potatoes", "Flour", "Spices", "Oil"), Arrays.asList("Make filling", "Coat in batter", "Fry"), "Crispy balls");
            addRecipe("Bajji", "Fried vegetable fritters.", "🥕", "30 mins", "Easy", "Veg", "South India", "Snacks",
                Arrays.asList("Vegetables", "Flour", "Spices", "Oil"), Arrays.asList("Make batter", "Dip veggies", "Fry"), "Quick snack");
            addRecipe("Pakoda", "Fried snacks.", "🍟", "25 mins", "Easy", "Veg", "Indian", "Snacks",
                Arrays.asList("Flour", "Vegetables", "Spices", "Oil"), Arrays.asList("Make batter", "Fry"), "Street food");
            addRecipe("Murukku", "Crispy spirals.", "🥨", "50 mins", "Hard", "Veg", "South India", "Snacks",
                Arrays.asList("Rice flour", "Spices", "Oil"), Arrays.asList("Make dough", "Shape", "Fry"), "Traditional snack");
            addRecipe("Sundal", "Chickpea snack.", "🫘", "20 mins", "Easy", "Veg", "South India", "Snacks",
                Arrays.asList("Chickpeas", "Coconut", "Spices"), Arrays.asList("Cook chickpeas", "Temper"), "Protein snack");
            addRecipe("Banana Chips", "Fried banana slices.", "🍌", "30 mins", "Easy", "Veg", "Kerala", "Snacks",
                Arrays.asList("Bananas", "Oil", "Salt"), Arrays.asList("Slice bananas", "Fry"), "Sweet chips");
            addRecipe("Masala Vada", "Spiced lentil fritters.", "🍛", "45 mins", "Medium", "Veg", "South India", "Snacks",
                Arrays.asList("Lentils", "Spices", "Oil"), Arrays.asList("Grind lentils", "Fry"), "Spicy vada");
            addRecipe("Punugulu", "Fried batter balls.", "🍪", "25 mins", "Easy", "Veg", "Andhra", "Snacks",
                Arrays.asList("Flour", "Spices", "Oil"), Arrays.asList("Make batter", "Fry"), "Batter balls");
            addRecipe("Samosa", "Fried pastry with filling.", "🥟", "60 mins", "Medium", "Veg", "Indian", "Snacks",
                Arrays.asList("Flour", "Potatoes", "Spices", "Oil"), Arrays.asList("Make dough", "Fill", "Fry"), "Popular snack");
            addRecipe("Medu Vada", "Urad dal fritters.", "🍩", "50 mins", "Medium", "Veg", "South India", "Snacks",
                Arrays.asList("Urad dal", "Spices", "Oil"), Arrays.asList("Grind dal", "Fry"), "Classic vada");

            // Sweets
            addRecipe("Payasam", "Rice pudding.", "🍚", "45 mins", "Medium", "Veg", "South India", "Sweets",
                Arrays.asList("Rice", "Milk", "Sugar", "Cardamom"), Arrays.asList("Cook rice in milk", "Add sugar"), "Creamy pudding");
            addRecipe("Mysore Pak", "Ghee sweet.", "🍬", "60 mins", "Hard", "Veg", "Karnataka", "Sweets",
                Arrays.asList("Ghee", "Sugar", "Flour"), Arrays.asList("Cook ghee and sugar", "Add flour"), "Rich sweet");
            addRecipe("Ariselu", "Sweet fritters.", "🍪", "40 mins", "Medium", "Veg", "Andhra", "Sweets",
                Arrays.asList("Rice flour", "Jaggery", "Oil"), Arrays.asList("Make dough", "Fry"), "Jaggery sweet");
            addRecipe("Rava Kesari", "Semolina sweet.", "🍯", "30 mins", "Easy", "Veg", "South India", "Sweets",
                Arrays.asList("Semolina", "Sugar", "Ghee", "Saffron"), Arrays.asList("Roast semolina", "Add sugar"), "Quick sweet");
            addRecipe("Laddu", "Sweet balls.", "🍬", "45 mins", "Medium", "Veg", "Indian", "Sweets",
                Arrays.asList("Flour", "Sugar", "Ghee", "Nuts"), Arrays.asList("Make dough", "Shape balls"), "Festive sweet");
            addRecipe("Bobbatlu", "Sweet stuffed flatbread.", "🥟", "60 mins", "Hard", "Veg", "Andhra", "Sweets",
                Arrays.asList("Flour", "Lentils", "Jaggery"), Arrays.asList("Make filling", "Stuff dough", "Cook"), "Sweet paratha");
            addRecipe("Jangri", "Sweet spirals.", "🍬", "50 mins", "Hard", "Veg", "North India", "Sweets",
                Arrays.asList("Flour", "Sugar", "Oil"), Arrays.asList("Make batter", "Fry", "Soak in syrup"), "Colorful sweet");
            addRecipe("Halwa", "Carrot sweet.", "🥕", "40 mins", "Medium", "Veg", "Indian", "Sweets",
                Arrays.asList("Carrots", "Sugar", "Ghee"), Arrays.asList("Cook carrots", "Add sugar"), "Winter sweet");
            addRecipe("Coconut Burfi", "Coconut sweet.", "🥥", "35 mins", "Easy", "Veg", "Indian", "Sweets",
                Arrays.asList("Coconut", "Sugar", "Ghee"), Arrays.asList("Cook coconut and sugar"), "Simple burfi");
            addRecipe("Gulab Jamun", "Sweet dumplings.", "🍬", "45 mins", "Medium", "Veg", "Indian", "Sweets",
                Arrays.asList("Milk powder", "Sugar", "Rose water"), Arrays.asList("Make dough", "Fry", "Soak in syrup"), "Sweet treat");

            // Pickles
            addRecipe("Mango Pickle", "Spicy mango pickle.", "🥭", "30 mins", "Easy", "Veg", "Indian", "Pickles",
                Arrays.asList("Mango", "Spices", "Oil", "Salt"), Arrays.asList("Mix ingredients", "Ferment"), "Tangy pickle");
            addRecipe("Lemon Pickle", "Lemon pickle.", "🍋", "25 mins", "Easy", "Veg", "South India", "Pickles",
                Arrays.asList("Lemons", "Spices", "Oil"), Arrays.asList("Mix", "Preserve"), "Citrus pickle");
            addRecipe("Tomato Pickle", "Tomato pickle.", "🍅", "35 mins", "Easy", "Veg", "Indian", "Pickles",
                Arrays.asList("Tomatoes", "Spices", "Oil"), Arrays.asList("Cook tomatoes", "Add spices"), "Red pickle");
            addRecipe("Garlic Pickle", "Garlic pickle.", "🧄", "30 mins", "Easy", "Veg", "Indian", "Pickles",
                Arrays.asList("Garlic", "Spices", "Oil"), Arrays.asList("Mix", "Preserve"), "Garlic flavor");

            // Breads
            addRecipe("Chapati", "Thin flatbread.", "🥖", "20 mins", "Easy", "Veg", "Indian", "Breads",
                Arrays.asList("Flour", "Water", "Oil"), Arrays.asList("Make dough", "Roll", "Cook on griddle"), "Daily bread");
            addRecipe("Phulka", "Puffed flatbread.", "🥖", "15 mins", "Medium", "Veg", "North India", "Breads",
                Arrays.asList("Flour", "Water", "Ghee"), Arrays.asList("Make dough", "Cook"), "Light bread");
            addRecipe("Parotta", "Layered flatbread.", "🥖", "45 mins", "Hard", "Veg", "South India", "Breads",
                Arrays.asList("Flour", "Oil", "Water"), Arrays.asList("Make dough", "Layer", "Cook"), "Flaky bread");
            addRecipe("Puri", "Fried bread.", "🥟", "30 mins", "Easy", "Veg", "Indian", "Breads",
                Arrays.asList("Flour", "Oil", "Water"), Arrays.asList("Make dough", "Fry"), "Puffed bread");

            // Beverages
            addRecipe("Filter Coffee", "South Indian coffee.", "☕", "10 mins", "Easy", "Veg", "South India", "Beverages",
                Arrays.asList("Coffee", "Milk", "Sugar"), Arrays.asList("Brew coffee", "Mix with milk"), "Strong coffee");
            addRecipe("Buttermilk", "Spiced buttermilk.", "🥛", "5 mins", "Easy", "Veg", "Indian", "Beverages",
                Arrays.asList("Buttermilk", "Spices", "Coriander"), Arrays.asList("Mix spices"), "Refreshing drink");
            addRecipe("Lassi", "Sweet yogurt drink.", "🥛", "5 mins", "Easy", "Veg", "Punjab", "Beverages",
                Arrays.asList("Yogurt", "Sugar", "Cardamom"), Arrays.asList("Blend"), "Creamy drink");

            // Vegetable Dishes
            addRecipe("Potato Fry", "Fried potatoes.", "🥔", "25 mins", "Easy", "Veg", "Indian", "Vegetable Dishes",
                Arrays.asList("Potatoes", "Spices", "Oil"), Arrays.asList("Slice potatoes", "Fry with spices"), "Simple fry");
            addRecipe("Beans Poriyal", "Stir-fried beans.", "🫘", "20 mins", "Easy", "Veg", "South India", "Vegetable Dishes",
                Arrays.asList("Beans", "Coconut", "Spices"), Arrays.asList("Cook beans", "Temper"), "Green beans");

            // Non-Veg
            addRecipe("Hyderabadi Biryani", "Spiced meat biryani.", "🍚", "90 mins", "Hard", "Non-Veg", "Hyderabad", "Non-Veg",
                Arrays.asList("Meat", "Rice", "Spices", "Onion"), Arrays.asList("Cook meat", "Layer with rice", "Dum cook"), "Royal dish");
            addRecipe("Chicken 65", "Spicy fried chicken.", "🍗", "40 mins", "Medium", "Non-Veg", "South India", "Non-Veg",
                Arrays.asList("Chicken", "Spices", "Oil"), Arrays.asList("Marinate", "Fry"), "Crispy chicken");
            addRecipe("Fish Fry", "Fried fish.", "🐟", "30 mins", "Easy", "Non-Veg", "Indian", "Non-Veg",
                Arrays.asList("Fish", "Spices", "Oil"), Arrays.asList("Marinate", "Fry"), "Seafood fry");
                logger.info("Successfully added all default recipes");
            } else {
                logger.info("Recipes already exist, skipping initialization");
            }
        } catch (Exception e) {
            logger.error("Error during recipe initialization", e);
            throw e; // Re-throw to cause shutdown
        }
        logger.info("CommandLineRunner completed successfully");
    }

    private void addRecipe(String title, String desc, String image, String time, String diff, String diet, String region, String cat,
                          List<String> ingredients, List<String> steps, String nutrition) {
        Recipe recipe = new Recipe();
        recipe.setTitle(title);
        recipe.setDescription(desc);
        recipe.setImage(image);
        recipe.setTime(time);
        recipe.setDifficulty(diff);
        recipe.setDiet(diet);
        recipe.setRegion(region);
        recipe.setCategory(cat);
        recipe.setIngredients(ingredients);
        recipe.setSteps(steps);
        recipe.setNutrition(nutrition);
        recipeRepository.save(recipe);
    }
}