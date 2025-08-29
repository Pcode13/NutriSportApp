import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from './src/hooks/useFonts';

const ExampleComponent = () => {
  const fonts = useFonts();

  return (
    <Text style={[styles.text, { fontFamily: fonts.bold }]}>
      Custom Font Text
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ExampleComponent;
