import React, {useState, useContext, useRef} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import TopSignup from '../../components/TopSignup';
import styles from '../../styles/screens/Signup/Verification.style';
import {Button} from '../../Reusable components/Button';
import {ThemeContext} from '../../ThemeContext';

const OTP = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const [otp, setOtp] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const otpInputRef = useRef();

  // Function to handle OTP change
  const handleOtpChange = otpValue => {
    setOtp(otpValue);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('transfer');
  };

  // Check if OTP input length is 6
  const isSubmitDisabled = otp.length !== 6;

  return (
    <View style={styles.Verification}>
      <TopSignup
        title="OTP"
        subtitle="Enter 6 digit code we sent to +20 101 131 5412"
        decrement={() => {
          navigation.navigate('transfer');
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: theme.background,
        }}>
        <View>
          <View style={styles.container}>
            <OTPTextInput
              ref={otpInputRef}
              inputCount={6} // Update to 6
              handleTextChange={handleOtpChange}
              containerStyle={[styles.otpContainer]}
              textInputStyle={[
                styles.input,
                {backgroundColor: theme.cardBackground},
                {color: theme.primaryText},
              ]}
              keyboardType="numeric"
            />
          </View>
          <View style={{margin: 15}}>
            <Text style={{color: theme.primaryText}}>
              Didn't receive the code?
            </Text>
            <Text style={[{color: theme.secondaryText}, styles.bold]}>
              Request a new one
            </Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          {/* Disable the button if OTP is not 6 digits long */}
          <Button
            title="Submit"
            myOnClick={openModal}
            disabled={isSubmitDisabled}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalContent, {backgroundColor: theme.background}]}>
            <Image
              source={require('../../../assets/checked.png')}
              style={styles.modalImage}
            />
            <Text style={[styles.modalTitle, {color: theme.primaryText}]}>
              Mission Complete
            </Text>
            <Text style={styles.modalSubtitle}>
              Transfer to Jasmine Robert was successful
            </Text>
            <Button
              title={'Finish'}
              style={styles.modalCloseButton}
              myOnClick={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OTP;
