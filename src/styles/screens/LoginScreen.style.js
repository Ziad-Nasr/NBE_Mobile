import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  login: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    // height: 100,
  },
  backgroundImage: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  AboveBackgroundImage: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  upperLogin: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  translateButton: {
    backgroundColor: '#FFFFFF',
    height: 35,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  translateButtonText: {
    color: '#007236',
    fontWeight: '700',
    // textAlign: 'center',
    // alignItems: 'center',
  },
  upperLogo: {
    width: 120,
    height: 30,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  loginButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    margin: 12,
    width: 300,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
