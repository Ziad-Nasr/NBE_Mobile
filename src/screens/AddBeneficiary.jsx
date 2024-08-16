import React from 'react';
import {View, Text} from 'react-native';
import TopSignup from '../components/TopSignup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReasonField from '../Reusable components/ReasonField';
import styles from '../styles/screens/AddBeneficiary.style';
import Dropdown from '../Reusable components/DropDown';
import {Button} from '../Reusable components/Button';

const AddBeneficiary = () => {
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
    <>
      <TopSignup />
      <View style={styles.addBeneficiary}>
        <View>
          <View style={styles.uploadImageBeneficiary}>
            <Ionicons
              name="person-add"
              size={50}
              color="black"
              style={{
                backgroundColor: 'white',
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
            label={'Brank branch'}
            items={transferTo}
            defaultValue={transferTo[0]}
          />
          <ReasonField title={'Account number'} placeholder={'123456789'} />
          <ReasonField title={'Phone Number'} placeholder={'123456789'} />
          <ReasonField title={'Email'} placeholder={'......@gmail.com'} />
        </View>
        <Button title={'Add Beneficiary'} />
      </View>
    </>
  );
};

export default AddBeneficiary;
