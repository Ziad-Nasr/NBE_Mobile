import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  Verification: {
    backgroundColor: '#F1F3FB',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Ensure the container takes available space
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 15,
    width: 40,
    height: 60,
    textAlign: 'center',
    fontSize: 18,
  },
  loginButton: {
    // Add styles for login button container if needed
    marginTop: 20,
    alignItems: 'center',
  },
});
