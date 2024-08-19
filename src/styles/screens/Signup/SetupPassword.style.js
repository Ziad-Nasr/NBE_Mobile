import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  Verification: {
    backgroundColor: '#F1F3FB',
    height: '100%',
  },
  formFieldPassword: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%',
    borderRadius: 10,
    borderColor: 'rgba(0, 114, 54, 1)',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  arroba: {
    width: 20,
    height: 20,
    marginRight: 10,
    margin: 10,
  },
  labelLoginInputPassword: {
    fontSize: 14,
    color: '#007236',
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 0,
  },
  loginInputPassword: {
    fontSize: 16,
    color: '#007236',
    marginTop: 0,
    padding: 0,
  },
  mh15: {
    marginHorizontal: 15,
  },
  passwordItem: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  Off: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginRight: 5,
  },
  On: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#007236',
    marginRight: 5,
  },
  dualItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
  },
  loginButton: {
    marginTop: 25,
  },
});
