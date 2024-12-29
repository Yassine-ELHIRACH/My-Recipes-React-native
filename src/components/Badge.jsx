import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import { BADGE } from '../utils/tests/testIDs';

export default function ElevatedBadge({
  icon,
  title,
  textStyle,
  onPress,
  style = {},
  elevation = 0,
  ...props
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.center,
        width: title.length * 15,
        justifyContent: icon ? null : 'center',
        paddingHorizontal: 10,
        ...style,
      }}
      testID={BADGE}
    >
      {icon}
      <Text
        style={[styles.text, { marginLeft: icon ? 15 : null, ...textStyle }]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    maxWidth: 150,
    minWidth: 50,
    height: 35,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'green',
  },
  text: {
    color: 'green',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
