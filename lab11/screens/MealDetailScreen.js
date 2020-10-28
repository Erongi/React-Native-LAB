import React, { useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/mealsAction";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const catId = props.navigation.getParam("id");
  const dispatch = useDispatch();
  const selectedMeal = useSelector((state) => state.meals.filteredMeals);
  const selectedCategory = selectedMeal.find((cat) => cat.id === catId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(catId));
  }, [dispatch, catId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === catId)
  );
  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Image style={styles.logo} source={{ uri: selectedCategory.imageUrl }} />
      <Text>{selectedCategory.title}</Text>
      <Text>{selectedCategory.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const isFavorite = navigationData.navigation.getParam("isFav");
  // const selectedCategory = MEALS.find((cat) => cat.id === catId);
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="favorite"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={navigationData.navigation.getParam("toggleFav")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "30%",
  },
});

export default MealDetailScreen;
