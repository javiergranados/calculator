import React from 'react';
import {SafeAreaView} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';

const App = () => {
  // return <CounterScreen />;
  return (
    <SafeAreaView style={{flex: 1}}>
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
