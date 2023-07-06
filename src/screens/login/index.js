import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import {InputBox} from '../../component/InputBox/index';
import {LocalImageView} from '../../component/Image/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const navigation = useNavigation();

  // eslint-disable-next-line react/no-unstable-nested-components
  const ImageComponent = () => (
    <View>
      <TouchableOpacity>
        <LocalImageView
          style={styles.vectorImageStyle}
          imagePath={Images.SplashScreenVector}
        />
      </TouchableOpacity>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const LoginComponent = () => (
    <TouchableOpacity onPress={onLoginPressed}>
      <View style={styles.loginButtonStyles}>
        <TextView variant={'sh4'} color={colors.black}>
          Login
        </TextView>
      </View>
    </TouchableOpacity>
  );
  const onLoginPressed = () => {
    navigation.navigate('Otp_Screen');
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const MobileNumberComponent = () => (
    <View>
      <View style={{marginTop: hp(8)}}>
        <TextView
          variant={'h5'}
          color={colors.black}
          style={styles.mobileNumberTextStyle}>
          Mobile Number
        </TextView>
      </View>

      <InputBox
        style={styles.textInput}
        type="phone-pad"
        hint="Phone Number"
        defaultValue={phoneNumber}
        value={setPhoneNumber}
        placeholderTextColor="#000"
      />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.parrentContainer}>
        <ImageComponent />
        <MobileNumberComponent />
        <LoginComponent />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.white,
    height: hp(100),
  },
  vectorImageStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(30),
    height: hp(15),
    marginTop: hp(12),
  },
  mobileNumberTextStyle: {
    marginTop: hp(6),
    marginHorizontal: wp(10),
  },
  textInput: {
    alignSelf: 'center',
    height: hp(7),
    width: wp(80),
    marginTop: hp(3),
    marginHorizontal: wp(8),
    borderWidth: wp(0.3),
    borderRadius: wp(2),
    backgroundColor: colors.primaryBorderColor,
  },
  loginButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.primaryBorderColor,
    borderRadius: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(16),
    width: wp(76),
    height: hp(8),
  },
});
export default Login;
