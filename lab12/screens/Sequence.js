import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";
const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0)).current;
  const opaVal = useRef(new Animated.Value(1)).current;

  const picnic = springVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const runspring = () => {
    Animated.sequence([
      Animated.timing(opaVal, {
        duration: 2000,
        useNativeDriver: true,
        toValue: 0,
      }),
      Animated.timing(opaVal, {
        duration: 2000,
        useNativeDriver: true,
        toValue: 1,
      }),
      Animated.timing(springVal, {
        duration: 2000,
        useNativeDriver: true,
        toValue: 1,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Animated.Image
          style={{
            width: 180,
            height: 150,
            opacity: opaVal,
            transform: [{ rotate: picnic }],
          }}
          source={require("../assets/ITLOGO.png")}
        />
      </View>
      <Button style={styles.button} title="Spring" onPress={runspring} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  // button: {
  //   marginTop: 500,
  // },
  logo: {
    justifyContent: "center",
  },
});
export default Spring;
