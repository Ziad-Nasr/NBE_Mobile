import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import styles from './../styles/components/Card.style';
const Card = () => {
  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/CardImage.png')}
            resizeMode="contain"
            style={styles.cardImage}
            imageStyle={styles.imageStyle}>
            <View style={styles.overlay}>
              <View style={styles.moneyVisa}>
                <Text style={styles.moneyText}>$125,381.15</Text>
                <Image
                  source={require('../../assets/visa.png')}
                  style={styles.visa}
                />
              </View>
              <View style={styles.numberChip}>
                <Text style={styles.visaNumber}>**** **** **** 6506</Text>
                <Image
                  source={require('../../assets/chip.png')}
                  style={styles.chip}
                />
              </View>
              <View style={styles.preInfo}>
                <Text style={styles.preInfoText}>CARD HOLDER</Text>
                <Text style={[styles.preInfoText, styles.ml2]}>EXPIRES</Text>
                <Text style={styles.preInfoText}>CVV</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>AHMAD SAMI AL-SAYED</Text>
                <Text style={styles.infoText}>08/25</Text>
                <Text style={styles.infoText}>352</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/CardImage.png')}
            resizeMode="contain"
            style={styles.cardImage}
            imageStyle={styles.imageStyle}>
            <View style={styles.redOverlay}>
              <View style={styles.moneyVisa}>
                <Text style={styles.moneyText}>$125,381.15</Text>
                <Image
                  source={require('../../assets/visa.png')}
                  style={styles.visa}
                />
              </View>
              <View style={styles.numberChip}>
                <Text style={styles.visaNumber}>**** **** **** 6506</Text>
                <Image
                  source={require('../../assets/chip.png')}
                  style={styles.chip}
                />
              </View>
              <View style={styles.preInfo}>
                <Text style={styles.preInfoText}>CARD HOLDER</Text>
                <Text style={[styles.preInfoText, styles.ml2]}>EXPIRES</Text>
                <Text style={styles.preInfoText}>CVV</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoText}>AHMAD SAMI AL-SAYED</Text>
                <Text style={styles.infoText}>08/25</Text>
                <Text style={styles.infoText}>352</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
