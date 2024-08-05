import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  loginForm: {
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  formField: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%',
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    marginBottom: 10,
  },
  arroba: {
    width: 20,
    height: 20,
    // marginRight: 10,
    margin: 10,
  },
  labelLoginInput: {
    fontSize: 14,
    color: '#FFFFFF',
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
  formFieldPassword: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%',
    borderRadius: 10,
    borderColor: 'rgba(0, 114, 54, 1)',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 20,
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
  loginButton: {
    width: '80%',
  },
  bottomButtonLoginForm: {
    // width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  fingerPrintLoginForm: {
    width: 40,
    height: 40,
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  white: {
    color: '#FFFFFF',
    fontWeight: '300',
  },
  orange: {
    color: '#F6A721',
    fontWeight: '500',
  },
  signUpLoginForm: {
    marginStart: 10,
    color: '#F6A721',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  bottomLoginForm: {
    marginHorizontal: -20,
    marginTop: 25,
    paddingBottom: 15,
    // marginVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  copyRights: {
    color: '#FFFFFF',
    fontSize: 7,
    textAlign: 'center',
    marginTop: 10,

    fontWeight: '300',
  },
});
