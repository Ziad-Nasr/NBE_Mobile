import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import TopSignup from '../../components/TopSignup';
import styles from '../../styles/screens/Signup/Verification.style';
import {Button} from '../../Reusable components/Button';

const OTP = ({navigation}) => {
  const [values, setValues] = useState(Array(5).fill(''));
  const [modalVisible, setModalVisible] = useState(false);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    if (text.length <= 1 && /^[0-9]*$/.test(text)) {
      const newValues = [...values];
      newValues[index] = text;
      setValues(newValues);

      if (text && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('transfer');
  };

  return (
    <View style={styles.Verification}>
      <TopSignup
        title="OTP"
        subtitle="Enter 5 digit code we sent to +20 101 131 5412"
        decrement={() => {
          navigation.navigate('transfer');
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View style={styles.container}>
            {values.map((value, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={value}
                onChangeText={text => handleChangeText(text, index)}
                keyboardType="numeric"
                maxLength={1}
                placeholder="_"
                ref={el => (inputRefs.current[index] = el)}
              />
            ))}
          </View>
          <View style={{margin: 15}}>
            <Text>Didn't receive the code?</Text>
            <Text style={[styles.blackText, styles.bold]}>
              Request a new one in (Timer)
            </Text>
          </View>
        </View>
        <View style={styles.loginButton}>
          <Button title="Submit" myOnClick={openModal} />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../../assets/checked.png')}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>Mission Complete</Text>
            <Text style={styles.modalSubtitle}>
              Transfer to Jsmine Robert was successful
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
