import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Pasta',
      'A super tasty pasta - just awesome',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('Chicken Meat', 1),
        new Ingredient('Pasta', 2),
        new Ingredient('Cheese', 3),
      ]),
    new Recipe('Beef Burger',
      'What else you need to say?',
      'https://meatlessfarm.com/wp-content/uploads/2020/02/Meatless-Farm-Ultimate-Meaty-March-Burger-square.jpg',
      [
        new Ingredient('French Fries', 20),
        new Ingredient('Beef Patty', 1),
        new Ingredient('Cheese Slice', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Buns', 2),
      ]),
  ];

  constructor (private sLService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.sLService.addIngredients(ingredients);
  }
}