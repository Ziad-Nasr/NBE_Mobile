import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  MobileNumber: {
    alignItems: 'center',
    width: '100%',
    height: '76%',
    justifyContent: 'space-between',
  },
  formField: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    // marginEnd: 15,
    width: '95%',
    borderRadius: 10,
    borderColor: '#007236',
    borderWidth: 2,
    marginBottom: 10,
  },
  arroba: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
    margin: 10,
  },
  labelLoginInput: {
    fontSize: 14,
    color: '#007236',
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 0,
  },
  loginInput: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 0,
    padding: 0,
  },
  LowerMobileNumber: {
    alignItems: 'center',
    width: '100%',
  },
  loginButton: {
    width: '95%',
    marginBottom: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  black: {
    color: '#000000',
  },
});
