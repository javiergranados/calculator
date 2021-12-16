import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  color?: string;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({ text, color = '#2d2d2d', width = 80 }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{ ...styles.button, backgroundColor: color, width: width }}>
        <Text style={{ ...styles.textButton, color: color === '#9b9b9b' ? 'black' : 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});

export default Button;
