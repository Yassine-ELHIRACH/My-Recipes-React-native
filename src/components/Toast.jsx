import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {TOAST} from "../utils/tests/testIDs"


export default function Toast({ visible = true, icon, text, style }) {
  return visible ? (
    <ElevatedView elevation={3} style={{ ...styles.container, ...style }} testID={TOAST}>
      <Text>{text}</Text>
      {icon}
    </ElevatedView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    width: '80%',
    height: 50,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal : 10,
    borderRadius: 5
  },
});
