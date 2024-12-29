import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { BUTTON } from '../utils/tests/testIDs';

export default function Button({ title = '', onPress, children, style, textStyle = {} }) {
  return (
    <TouchableRipple
      style={{ ...styles.button, ...style }}
      onPress={() => onPress()}
      testID={BUTTON}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {children}
        <View style={{ width: 20 }} />
        <Text style={{...styles.title, ...textStyle}}>{title.toLocaleUpperCase()}</Text>
      </View>
    </TouchableRipple>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 45,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
