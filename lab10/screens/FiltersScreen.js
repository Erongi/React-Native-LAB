import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const switchGlutenFree = () =>
    setIsGlutenFree((previousState) => !previousState);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const switchLactoseFree = () =>
    setIsLactoseFree((previousState) => !previousState);
  const [isVegan, setIsVegan] = useState(false);
  const switchVegan = () => setIsVegan((previousState) => !previousState);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const switchVegetarian = () =>
    setIsVegetarian((previousState) => !previousState);

  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text>Available Filters / Restrictions</Text>
      </View>

      <View style={styles.filterContainer}>
        <Text>GlutenFree</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isGlutenFree ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchGlutenFree}
          value={isGlutenFree}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>LactoseFree</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLactoseFree ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchLactoseFree}
          value={isLactoseFree}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVegan ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchVegan}
          value={isVegan}
        />
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVegetarian ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchVegetarian}
          value={isVegetarian}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-list"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-save" onPress={() => {}} />
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
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
