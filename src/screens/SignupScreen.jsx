import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MobileSignupScreen from './Signup/MobileNumber';
import Verification from './Signup/Verification';

export default function SignupScreen() {
  const [pageNumber, setPageNumber] = useState(0);
  const currPage = () => {
    switch (pageNumber) {
      case 0:
        return (
          <MobileSignupScreen
            increment={() => {
              setPageNumber(pageNumber + 1);
            }}
            decrement={() => {
              setPageNumber(pageNumber - 1);
            }}
          />
        );
      case 1:
        return (
          <Verification
            increment={() => {
              setPageNumber(pageNumber + 1);
            }}
            decrement={() => {
              setPageNumber(pageNumber - 1);
            }}
          />
        );
      default:
        return <MobileSignupScreen />;
    }
  };
  return <View>{currPage()}</View>;
}
