import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Spring from "../screens/Spring";
import Sequence from "../screens/Sequence";
import Parallel from "../screens/Parallel";
import { AntDesign } from "@expo/vector-icons";

const MyTabNavigator = createBottomTabNavigator({
  Spring: {
    screen: Spring,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="book" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Sequence: {
    screen: Sequence,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="book" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Parallel: {
    screen: Parallel,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <AntDesign name="book" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
});
export default createAppContainer(MyTabNavigator);
