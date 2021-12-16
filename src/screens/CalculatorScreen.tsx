import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appStyles } from '../theme/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={appStyles.text}>Calculator screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalculatorScreen;
