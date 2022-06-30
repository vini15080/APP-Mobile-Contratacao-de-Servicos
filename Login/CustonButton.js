import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default ({ title, color = '#E6E4E4', onPress }) => {
  
  return (
    <TouchableOpacity 
    onPress={onPress}

    style={[styles.button, {backgroundColor: color }]}
    >
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#979090',
    fontSize: 20,
  },
});