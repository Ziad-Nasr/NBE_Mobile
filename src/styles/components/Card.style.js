import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  card: {
    width: 400,
    height: 250,
    padding: 5,
    marginBottom: 10,
    overflow: 'hidden', // Ensure the children respect the border radius
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,255,0,0.1)',
    borderRadius: 20,
    paddingTop: 30,
  },
  redOverlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,0,0,0.1)',
    borderRadius: 20,
    paddingTop: 30,
  },
  imageStyle: {
    borderRadius: 20, // This will round the image inside the ImageBackground
  },
  cardText: {
    color: '#fff', // Optional: Customize text color to contrast with the image
    fontSize: 18,
  },
  moneyVisa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 30,
  },
  moneyText: {
    color: '#fff',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontSize: 27,
  },
  visa: {
    width: 80,
    height: 35,
    paddingBottom: 30,
  },
  numberChip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 30,
  },
  visaNumber: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  chip: {
    width: 40,
    height: 35,
  },
  preInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  preInfoText: {
    color: '#848484',
    fontSize: 14,
  },
  ml2: {
    marginLeft: 85,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
});
