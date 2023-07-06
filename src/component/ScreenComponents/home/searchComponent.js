import {View, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {wp, hp} from '../../../resources/dimensions';
import Images from '../../../resources/images';
import {colors} from '../../Styles/styleSheet';
import {LocalImageView} from '../../Image';

const SearchComponent = () => {
  return (
    <View style={styles.SectionStyle}>
      <Image source={Images.searchVector} style={styles.ImageStyle} />
      <TextInput
        style={styles.searchTextInputStyle}
        placeholder="Search"
        placeholderTextColor={colors.secondaryTextColor}
      />
      <View style={styles.verticalLine} />
      <LocalImageView
        style={styles.micImageStyle}
        imagePath={Images.mic_Icon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchTextInputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: hp(1),
    maxWidth: wp(60),
    width: wp(70),
  },
  SectionStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(6),
    width: wp(83),
    borderRadius: wp(2),
    marginTop: hp(1.5),
    marginLeft: wp(2),
    backgroundColor: colors.active_white,
    borderWidth: wp(0.1),
  },

  ImageStyle: {
    height: hp(2.5),
    width: hp(2.5),
    borderRadius: hp(1.8),
    marginLeft: hp(2),
    alignItems: 'center',
    tintColor: colors.commonText,
  },
  micImageStyle: {
    width: wp(5),
    height: wp(5),
    marginLeft: wp(1),
  },
  verticalLine: {
    height: hp(3),
    borderWidth: hp(0.1),
    color: 'grey',
    marginLeft: wp(4),
  },
});
export default SearchComponent;
