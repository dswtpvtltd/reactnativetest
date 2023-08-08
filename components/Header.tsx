import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
type HeaderType = {
  title: string;
};

export const Header = ({title}: HeaderType) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    padding: 20,
  },
});
