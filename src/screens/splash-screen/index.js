import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import InputBox from '../../component/TextInput/InputBox';
import {colors, commonColors} from '../../component/Styles/styleSheet';

// import {useEffect} from 'react';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigateToLogin();
  });

  function navigateToLogin() {
    setTimeout(() => {
      navigation.navigate('Home_Screen');
    }, 1000);
  }

  return (
    <SafeAreaView>
      <View style={styles.parrentContainer}>
        <TouchableOpacity>
          <Image
            source={Images.SplashScreenVector}
            style={styles.vectorImageStyle}
          />
        </TouchableOpacity>
        <TextView variant={'h1'} color={colors.black} style={styles.textStyle}>
          Food for Everyone
        </TextView>
        <Image source={Images.SplashScreen} style={styles.deliveryBikeStyle} />
        <TouchableOpacity>
          <View style={styles.textViewStyles}>
            <TextView
              variant={'h6'}
              color={colors.orange}
              style={styles.startTextStyle}>
              Let's Start
            </TextView>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.sunshine_yellow,
    height: hp(100),
  },
  deliveryBikeStyle: {
    width: wp(95),
    height: hp(40),
    marginTop: hp(6),
  },
  vectorImageStyle: {
    width: wp(12),
    height: hp(7),
    marginTop: hp(4),
    marginLeft: wp(10),
  },
  textStyle: {
    marginTop: hp(4),
    marginLeft: wp(10),
  },
  textViewStyles: {
    alignSelf: 'flex-end',
    marginRight: wp(8),
    marginTop: hp(4),
    width: wp(45),
    height: hp(4),
    backgroundColor: colors.white,
    borderRadius: wp(5),
  },
  startTextStyle: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default SplashScreen;
