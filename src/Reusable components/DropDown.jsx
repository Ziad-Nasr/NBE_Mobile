import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

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

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={[styles.defaultContainerStyle, containerStyle]}
        style={[styles.defaultStyle, style]}
        dropDownContainerStyle={[
          styles.defaultDropDownStyle,
          dropDownContainerStyle,
        ]}
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
    color: '#00000',
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
