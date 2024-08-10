import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MobileSignupScreen from './Signup/MobileNumber';
import Verification from './Signup/Verification';
import SetupPassword from './Signup/SetupPassword';
import {HomeScreen} from './HomeScreen';

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
      case 2:
        return (
          <SetupPassword
            increment={() => {
              setPageNumber(pageNumber + 1);
            }}
            decrement={() => {
              setPageNumber(pageNumber - 1);
            }}
          />
        );
      default:
        return <HomeScreen />;
    }
  };
  return <View>{currPage()}</View>;
}
