export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
