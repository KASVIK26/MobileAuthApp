import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface Props {
  onPress: () => void;
}

const BackButton: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.arrow}>←</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '600',
  },
});

export default BackButton;