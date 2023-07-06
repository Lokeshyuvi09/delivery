import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import {LocalImageView} from '../../component/Image/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';

const Otp_Screen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };
  const maximumCodeLength = 4;

  // eslint-disable-next-line react/no-unstable-nested-components
  const ImageComponent = () => (
    <View>
      <TouchableOpacity>
        {/* <Image
          source={Images.SplashScreenVector}
          style={styles.vectorImageStyle}
        /> */}
        <LocalImageView
          style={styles.vectorImageStyle}
          imagePath={Images.SplashScreenVector}
        />
      </TouchableOpacity>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const TextComponent = () => (
    <View style={{marginTop: hp(8)}}>
      <TextView variant={'h5'} color={colors.black} style={styles.textStyle}>
        we have send OTP to your mobile...
      </TextView>
    </View>
  );
  const inputs = [];
  // eslint-disable-next-line react/no-unstable-nested-components
  const OtpComponent = () => (
    <View style={styles.otpViewStyle}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.box}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={value => handleOtpChange(value, index)}
            value={digit}
            ref={input => {
              inputs[index] = input;
            }}
          />
        ))}
      </View>
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const ResentTextComponent = () => (
    <View>
      <TextView
        variant={'h6'}
        color={colors.black}
        style={styles.resendOtpTextStyle}>
        Resend otp
      </TextView>
      <View style={styles.lines} />
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
    navigation.navigate('Home_Screen');
  };
  return (
    <SafeAreaView style={styles.parrentContainer}>
      <ScrollView>
        <ImageComponent />
        <TextComponent />
        <OtpComponent />
        <ResentTextComponent />
        <LoginComponent />
      </ScrollView>
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
    marginTop: hp(14),
  },
  textStyle: {
    marginHorizontal: wp(10),
    marginTop: hp(15),
  },
  box: {
    backgroundColor: colors.primaryBorderColor,
    width: wp(13),
    height: hp(6),
    marginTop: hp(2),
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    textAlign: 'center',
    fontSize: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(-4),
  },
  resendOtpTextStyle: {
    alignSelf: 'center',
    marginTop: hp(5),
  },
  lines: {
    alignSelf: 'center',
    width: wp(21),
    height: hp(0.2),
    backgroundColor: colors.black,
    marginTop: hp(-0.4),
  },
  loginButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.primaryBorderColor,
    borderRadius: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(10),
    width: wp(76),
    height: hp(8),
  },
});

export default Otp_Screen;
