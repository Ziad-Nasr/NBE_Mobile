import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import movieStore from '../../redux/store';
// Colors
import {Colors} from '../../../constants/Colors';

// Theme Context
import {ThemeContext} from '../../context/ThemeContext';
import Toast from 'react-native-toast-message';

const GridView = ({image, firstName, movie}) => {
  console.log('image', image);

  return (
    <Pressable style={[styles.MoviesGridItemContainer, {}]}>
      <Image source={{uri: image}} style={styles.MoviesGridItemImage} />
      <Text style={[styles.MoviesGridItemName, {}]}>{firstName}</Text>
    </Pressable>
  );
};

export default GridView;

const styles = StyleSheet.create({
  MoviesGridItemContainer: {
    borderRadius: 18,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 3,
    padding: 5,
    width: '48%',
  },
  MoviesGridItemImage: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
    width: 60,
    height: 60,
  },
  MoviesGridItemName: {
    fontFamily: 'Roboto Regular',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 8,
  },
});
