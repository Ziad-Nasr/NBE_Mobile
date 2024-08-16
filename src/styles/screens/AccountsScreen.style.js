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
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 30, // Makes the button round
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Default background color
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#007236', // Active button color
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
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 3,
    marginHorizontal: 7,
    alignItems: 'center',
    marginBottom: 15,
  },

  userCardList: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  listInfo: {
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  listInfoItem: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  microImageContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  microImage: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },

  name: {
    color: '#222222',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});
