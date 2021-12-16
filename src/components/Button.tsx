import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color = '#2d2d2d', textColor = 'white' }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text style={{ ...styles.text, color: textColor }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});

export default Button;
