import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import styles from '../styles/screens/SplashScreen.style';

export function SplashScreen() {
  const scale = useSharedValue(0);

  const opacity = useSharedValue(0);

  const animatedScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    scale.value = withTiming(1, {duration: 1500});

    opacity.value = withTiming(1, {duration: 2000, delay: 1500});
  }, []);

  return (
    <View style={styles.splash}>
      <Animated.Image
        source={require('../../assets/media/NBE_Middle_Logo.png')}
        style={[styles.middlelogo, animatedScaleStyle]}
      />

      <Animated.Image
        source={require('../../assets/media/NBE_Bottom_Logo.png')}
        style={[styles.bottomLogo, animatedOpacityStyle]}
      />
    </View>
  );
}
