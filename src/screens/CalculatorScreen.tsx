import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { appStyles } from '../theme/appTheme';

const CalculatorScreen = () => {
  return (
    <View style={appStyles.calculatorContainer}>
      <Text style={appStyles.memoizedResult}>1,500.00</Text>
      <Text style={appStyles.result}>1,500.00</Text>
      <View style={styles.buttonRow}>
        <Button text="C" color="#9b9b9b" textColor="black" />
        <Button text="+/-" color="#9b9b9b" textColor="black" />
        <Button text="del" color="#9b9b9b" textColor="black" />
        <Button text="/" color="#ff9427" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});

export default CalculatorScreen;
