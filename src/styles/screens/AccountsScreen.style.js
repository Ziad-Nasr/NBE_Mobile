import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  accounts: {
    padding: 10,
  },
  topAccountScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 30, // Makes the button round
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc', // Default background color
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#007BFF', // Active button color
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },

  title: {
    color: '#222222',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },

  scrollAreaGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollAreaList: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },

  userCardGrid: {
    width: 80,
    height: 80,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 3,
    marginHorizontal: 7,
    alignItems: 'center',
  },

  userCardList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 10,
  },

  name: {
    color: '#222222',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});
