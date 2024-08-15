import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  Verification: {
    backgroundColor: '#F1F3FB',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 15,
    width: 40,
    height: 60,
    textAlign: 'center',
    margin: 5,
    fontSize: 18,
  },
  loginButton: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  blackText: {
    color: '#000000',
  },
  bold: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  modalTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  modalSubtitle: {
    fontSize: 15,
    width: '75%',
    color: '#b7b7b7',
    marginVertical: 10,
    textAlign: 'center',
  },
  modalCloseButton: {
    fontSize: 16,
  },
});
