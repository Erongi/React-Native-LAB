import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  // const favMeals = favoriteMeals.filter(
  //   (meal) => meal.id === "m1" || meal.id === "m2"
  // );

  return (
    <View style={styles.screen}>
      <MealList navigation={props.navigation} listData={favoriteMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

FavoritesScreen.navigationOptions = (navigationData) => {
  return { headerTitle: "Your Favorites" };
};

export default FavoritesScreen;
