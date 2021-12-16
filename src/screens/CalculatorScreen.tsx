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
        <Button text="C" color="#9b9b9b" />
        <Button text="+/-" color="#9b9b9b" />
        <Button text="del" color="#9b9b9b" />
        <Button text="/" color="#ff9427" />
      </View>
      <View style={styles.buttonRow}>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="X" color="#ff9427" />
      </View>
      <View style={styles.buttonRow}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" color="#ff9427" />
      </View>
      <View style={styles.buttonRow}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" color="#ff9427" />
      </View>
      <View style={styles.buttonRow}>
        <Button text="0" width={180} />
        <Button text="." />
        <Button text="=" color="#ff9427" />
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
