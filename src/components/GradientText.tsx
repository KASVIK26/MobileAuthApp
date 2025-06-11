import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps {
  style?: any;
  children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({ style, children }) => {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={['#FF6B35', '#FFA500']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
});

export default GradientText;