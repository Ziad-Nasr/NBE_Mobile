import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ThemeContext} from '../ThemeContext';

const Dropdown = ({
  label,
  items,
  defaultValue,
  containerStyle,
  style,
  itemStyle,
  dropDownContainerStyle,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [dropdownItems, setItems] = useState(items);
  const {theme, isDarkMode} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {zIndex: open ? 1000 : 1}, // Adjust zIndex based on dropdown state
        isDarkMode ? {backgroundColor: theme.cardBackground} : {},
      ]}>
      {label && (
        <Text style={[styles.label, {color: theme.secondaryText}]}>
          {label}
        </Text>
      )}
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={[styles.defaultContainerStyle, style]}
        style={[
          styles.defaultStyle,
          isDarkMode
            ? {
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
              }
            : {},
        ]}
        dropDownContainerStyle={[
          styles.defaultDropDownStyle,
          dropDownContainerStyle,
          isDarkMode
            ? {
                backgroundColor: theme.background,
                borderColor: theme.borderColor,
              }
            : {},
        ]}
        textStyle={{color: theme.primaryText}}
        itemStyle={itemStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  label: {
    color: '#000000',
    fontWeight: 'bold',
  },
  defaultContainerStyle: {
    height: 40,
  },
  defaultStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  defaultDropDownStyle: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
});

export default Dropdown;
