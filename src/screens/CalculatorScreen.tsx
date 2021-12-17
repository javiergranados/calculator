import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { appStyles } from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    result,
    memoizedResult,
    clean,
    handleClick,
    handleSign,
    handleDelete,
    handleOperation,
    handleExecuteOperation,
  } = useCalculator();

  return (
    <View style={appStyles.calculatorContainer}>
      <Text style={appStyles.memoizedResult}>{memoizedResult}</Text>
      <Text style={appStyles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={styles.buttonRow}>
        <Button text="C" color="#9b9b9b" action={clean} />
        <Button text="+/-" color="#9b9b9b" action={handleSign} />
        <Button text="del" color="#9b9b9b" action={handleDelete} />
        <Button text="/" color="#ff9427" action={handleOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="7" action={handleClick} />
        <Button text="8" action={handleClick} />
        <Button text="9" action={handleClick} />
        <Button text="X" color="#ff9427" action={handleOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="4" action={handleClick} />
        <Button text="5" action={handleClick} />
        <Button text="6" action={handleClick} />
        <Button text="-" color="#ff9427" action={handleOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="1" action={handleClick} />
        <Button text="2" action={handleClick} />
        <Button text="3" action={handleClick} />
        <Button text="+" color="#ff9427" action={handleOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text="0" width={180} action={handleClick} />
        <Button text="." action={handleClick} />
        <Button text="=" color="#ff9427" action={handleExecuteOperation} />
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
