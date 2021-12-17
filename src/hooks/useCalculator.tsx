import { useState } from 'react';

type OperationProps = '' | 'add' | 'subtract' | 'multiply' | 'divide';

type UseCalculatorProps = {
  result: string;
  memoizedResult: string;
  clean: () => void;
  handleClick: (key: string) => void;
  handleSign: () => void;
  handleDelete: () => void;
  handleOperation: (key: string) => void;
  handleExecuteOperation: () => void;
};

const useCalculator = (): UseCalculatorProps => {
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

  return {
    result,
    memoizedResult,
    clean,
    handleClick,
    handleSign,
    handleDelete,
    handleOperation,
    handleExecuteOperation,
  };
};

export { useCalculator };
