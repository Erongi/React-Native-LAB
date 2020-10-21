import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const catId = props.navigation.getParam("id");
  const selectedCategory = MEALS.find((cat) => cat.id === catId);

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
  const catId = navigationData.navigation.getParam("id");
  const selectedCategory = MEALS.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-star" onPress={() => {}} />
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
