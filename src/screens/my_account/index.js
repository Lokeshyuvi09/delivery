import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
import MyAccountScreenComponent from '../../component/ScreenComponents/MyAccountScreenComponent';
import GetFeedingReceiptComponent from '../../component/ScreenComponents/GetFeedingReceiptComponent';

const My_Account = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const AccountTextComponent = () => (
    <View style={styles.accountTextStyles}>
      <TextView variant={'h4'} color={colors.black}>
        My Account
      </TextView>
      <TextView variant={'l6'} color={colors.black}>
        Log in or sign up to view your complete profile
      </TextView>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const ContinueComponent = () => (
    <TouchableOpacity>
      <View style={styles.continueButtonStyles}>
        <TextView variant={'sh6'} color={colors.green}>
          Continue
        </TextView>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.parrentContainer}>
      <ScrollView>
        <AccountTextComponent />
        <ContinueComponent />
        <MyAccountScreenComponent />
        <GetFeedingReceiptComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.white,
    height: hp(100),
  },
  accountTextStyles: {
    marginTop: hp(6),
    marginLeft: wp(5),
  },
  continueButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.green,
    borderWidth: wp(0.5),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
    width: wp(90),
    height: hp(6),
  },
});

export default My_Account;
