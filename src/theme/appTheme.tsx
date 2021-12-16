import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  memoizedResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
});

export { appStyles };
