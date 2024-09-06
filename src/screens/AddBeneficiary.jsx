import React, {useContext} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';
import TopSignup from '../components/TopSignup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReasonField from '../Reusable components/ReasonField';
import styles from '../styles/screens/AddBeneficiary.style';
import Dropdown from '../Reusable components/DropDown';
import {Button} from '../Reusable components/Button';
import {ThemeContext} from '../ThemeContext';

const AddBeneficiary = () => {
  const {theme, isDarkMode} = useContext(ThemeContext);
  const transferTo = [
    {
      label: '042-653214521245 - $2,145,5874.25',
      value: '042-653214521245 - $2,145,5874.25',
    },
    {
      label: 'Savings account - $500,000.00',
      value: 'Savings account - $500,000.00',
    },
    {
      label: 'Investment account - $10,000,000.00',
      value: 'Investment account - $10,000,000.00',
    },
  ];

  const renderContent = () => (
    <View style={[{backgroundColor: theme.background}]}>
      <View>
        <TopSignup />
        <View
          style={[
            styles.uploadImageBeneficiary,
            {backgroundColor: theme.background},
          ]}>
          <Ionicons
            name="person-add"
            size={50}
            color="black"
            style={{
              backgroundColor: isDarkMode ? theme.cardBackground : 'white',
              color: 'green',
              borderRadius: 20,
              padding: 30,
            }}
          />
        </View>
        <View style={styles.firstLastName}>
          <View style={styles.beneficiaryTextField}>
            <ReasonField title={'First name'} placeholder={'Ziad'} />
          </View>
          <View style={styles.beneficiaryTextField}>
            <ReasonField title={'Last Name'} placeholder={'Nasr'} />
          </View>
        </View>
        <Dropdown
          label={'Bank branch'}
          items={transferTo}
          defaultValue={transferTo[0]}
        />
        <ReasonField title={'Account number'} placeholder={'123456789'} />
        <ReasonField title={'Phone Number'} placeholder={'123456789'} />
        <ReasonField title={'Email'} placeholder={'......@gmail.com'} />
      </View>
      <View style={{marginBottom: 5}}>
        <Button title={'Add Beneficiary'} />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.addBeneficiary, {backgroundColor: theme.background}]}>
      <FlatList
        data={[{key: 'content'}]} // Use a dummy array with one item
        renderItem={renderContent}
        keyExtractor={item => item.key}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

export default AddBeneficiary;
