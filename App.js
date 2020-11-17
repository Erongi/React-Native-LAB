import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

export default function App() {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({ x: pan.x._value, y: pan.y._value, });
      pan.setValue({ x: 0, y: 0 }); },

    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length >= 2) {
        let x1 = touches[0].locationX;
        let y1 = touches[0].locationY;
        let x2 = touches[1].locationX;
        let y2 = touches[1].locationY;
        const distance =
          Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 100;
        Animated.spring(scale, {
          toValue: distance,
          friction: 3,
          useNativeDriver: false,
        }).start();
      }
      if (touches.length = 1){
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      }
    },

    onPanResponderRelease: () => {
      pan.flattenOffset();
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("./assets/logo.png")}
        {...panResponder.panHandlers}
        style={[{ transform: [{ scale: scale }] }, styles.box,pan.getLayout()]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
});
