import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      const favMeal = [...state.favoriteMeals];
      if (index >= 0) {
        favMeal.splice(index, 1);
      } else {
        favMeal.push(state.meals.find((meal) => meal.id === action.mealId));
      }
      return {
        ...state,
        favoriteMeals: favMeal,
      };
    default:
      return state;
  }
};

export default mealReducer;
