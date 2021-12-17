import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { appStyles } from '../theme/appTheme';

type OperationProps = '' | 'add' | 'subtract' | 'multiply' | 'divide';

const CalculatorScreen = () => {
  const [result, setResult] = useState<string>('0');
  const [memoizedResult, setMemoizedResult] = useState<string>('');
  const [operation, setOperation] = useState<OperationProps>('');

  const clean = () => {
    setResult('0');
    setMemoizedResult('');
  };

  const handleClick = (key: string) => {
    if (key === '.') {
      if (result.includes('.')) {
        return;
      }
      if (result === '' || result === '0') {
        setResult('0.');
        return;
      }
    }
    setResult(result === '0' ? key : result + key);
  };

  const handleSign = () => setResult((parseFloat(result) * -1).toString());

  const handleDelete = () => {
    if (result === '' || result === '0' || result.length === 1 || (result.length === 2 && result.includes('-'))) {
      setResult('0');
      return;
    }
    if (result.includes('.') && result.indexOf('.') === result.length - 1) {
      setResult(result.substring(0, result.indexOf('.')));
      return;
    }
    setResult(result.substring(0, result.length - 1));
  };

  const handleOperation = (key: string) => {
    let newOperation: OperationProps = '';
    switch (key) {
      case '+':
        newOperation = 'add';
        break;
      case '-':
        newOperation = 'subtract';
        break;
      case 'X':
        newOperation = 'multiply';
        break;
      case '/':
        newOperation = 'divide';
        break;
    }

    setOperation(newOperation);
    setMemoizedResult(result.endsWith('.') ? result + '0' : result);
    setResult('0');
  };

  const handleExecuteOperation = () => {
    if (!memoizedResult) {
      return;
    }
    let newResult: string = '';
    switch (operation) {
      case 'add':
        newResult = (parseFloat(memoizedResult) + parseFloat(result)).toString();
        break;
      case 'subtract':
        newResult = (parseFloat(memoizedResult) - parseFloat(result)).toString();
        break;
      case 'multiply':
        newResult = (parseFloat(memoizedResult) * parseFloat(result)).toString();
        break;
      case 'divide':
        newResult = (parseFloat(memoizedResult) / parseFloat(result)).toString();
        break;
    }

    setResult(newResult);
    setMemoizedResult('');
    setOperation('');
  };

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
