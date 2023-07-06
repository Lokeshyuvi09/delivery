import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {wp, hp} from '../../../resources/dimensions';
import Images from '../../../resources/images';
import {colors} from '../../Styles/styleSheet';
import {TextView} from '../../TextView';
import {LocalImageView} from '../../Image';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const onProfilePressed = () => navigation.navigate('My_Account');
  return (
    <View style={styles.headerStyle}>
      <View style={styles.textStyle}>
        <TextView
          variant={'h8'}
          style={styles.deliveryText}
          color={colors.black}>
          DELIVARY IN
        </TextView>
        <TextView variant={'h3'} style={styles.timeText} color={colors.black}>
          12 Minutes
        </TextView>
        <TouchableOpacity style={{}}>
          <View style={styles.arrowView}>
            <TextView
              variant={'h6'}
              style={styles.locationText}
              color={colors.secondaryTextColor}>
              Home - Chennai
            </TextView>
            <LocalImageView
              style={styles.downArrowImageStyle}
              imagePath={Images.down_arrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundViewStyle}>
        <TouchableOpacity onPress={onProfilePressed}>
          <View style={styles.elipseImgaAgeStyle}>
            <Image
              source={Images.imagevector}
              style={styles.imageVectorStyle}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    marginLeft: wp(6),
    justifyContent: 'space-between',
  },
  arrowView: {flexDirection: 'row'},
  deliveryText: {
    marginTop: hp(1),
  },
  timeText: {
    marginTop: hp(-1),
  },
  locationText: {
    marginTop: hp(-1),
  },
  backgroundViewStyle: {
    justifyContent: 'center',
    marginRight: wp(6),
  },
  downArrowImageStyle: {
    width: wp(4),
    height: wp(4),
    marginLeft: wp(1),
  },

  elipseImgaAgeStyle: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    alignSelf: 'center',
    borderColor: colors.black,
    borderWidth: wp(1.5),
  },
  imageVectorStyle: {
    width: wp(7),
    height: wp(7),
    borderRadius: wp(3.5),
    marginTop: hp(1),
    alignSelf: 'center',
    tintColor: colors.black,
    resizeMode: 'stretch',
  },
});
export default HeaderComponent;
