import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
    height: '100%',
    flex: 1,
  },

  activeNavBtn: {
    backgroundColor: '#007236',
    height: 75,
    margin: 5,
    width: 75,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },

  activeNavIcon: {
    color: '#fff',
  },

  activeNavText: {
    color: '#fff',
  },

  navBtn: {
    backgroundColor: '#F1F3FB',
    height: 75,
    width: 75,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },

  navIcon: {
    color: '#B7B7B7',
  },

  navText: {
    color: '#B7B7B7',
  },
});
