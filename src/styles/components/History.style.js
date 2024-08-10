import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  history: {
    flex: 1,
    // backgroundColor: '#000000',
    // height: '100px',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  ViewAll: {
    color: '#808080',
    fontSize: 13,
  },
  historyBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  itemDate: {
    fontSize: 15,
    color: '#808080',
    marginVertical: 5,
  },
  itemAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hrLine: {
    borderBottomColor: '#B7B7B7',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 0,
  },
  black: {
    color: '#000000',
  },
});
