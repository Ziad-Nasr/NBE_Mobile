import React, {useContext} from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import TopSignup from '../../components/TopSignup';
import Dropdown from '../../Reusable components/DropDown';
import TextField from '../../Reusable components/TextField';
import ReasonField from '../../Reusable components/ReasonField';
import {Button} from '../../Reusable components/Button';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../ThemeContext';

const Transfer = () => {
  const {theme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const transferType = [
    {label: 'Between your accounts', value: 'Between your accounts'},
    {label: 'To another account', value: 'To another account'},
  ];

  const transferFrom = [
    {
      label: '042-653214521245 - $2,145,5874.25',
      value: '042-653214521245 - $2,145,5874.25',
    },
    {
      label: 'Current account - $1,000,000.00',
      value: 'Current account - $1,000,000.00',
    },
  ];

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

  return (
    <KeyboardAvoidingView style={{backgroundColor: theme.background, flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <TopSignup title="Transfer" />
            <Dropdown
              label="Type of transfer"
              items={transferType}
              defaultValue="Between your accounts"
            />
            <Dropdown
              label="Transfer from"
              items={transferFrom}
              defaultValue="042-653214521245 - $2,145,5874.25"
            />
            <Dropdown
              label="Transfer to"
              items={transferTo}
              defaultValue="Savings account - $500,000.00"
            />
            <TextField />
            <ReasonField
              title={'Reason for transfer'}
              placeholder={'Add a reason'}
            />
          </View>
          <View style={{marginHorizontal: 30, marginBottom: 40}}>
            <Button
              title={'Transfer'}
              myOnClick={() => navigation.navigate('OTP')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Transfer;

// export const styles = {
//   dropDownInput: {
//     margin: 15,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//   },
// };
