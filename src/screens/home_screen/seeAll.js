import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../resources/dimensions';
import {TextView} from '../../component/TextView';
import {colors} from '../../component/Styles/styleSheet';
const IMAGE = [
  {
    diary_Product: require('../../assets/Home_Screen/health2.png'),
    title: 'Mango',
    amount: '$20',
    click: 'Add',
  },
  {
    diary_Product: require('../../assets/Home_Screen/health2.png'),
    title: 'Orange',
    amount: '$20',
    click: 'Add',
  },
  {
    diary_Product: require('../../assets/Home_Screen/health2.png'),
    title: 'Apple',
    amount: '$20',
    click: 'Add',
  },
  {
    diary_Product: require('../../assets/Home_Screen/health2.png'),
    title: 'Kiwi',
    amount: '$20',
    click: 'Add',
  },
  {
    diary_Product: require('../../assets/Home_Screen/health2.png'),
    title: 'cucumber',
    amount: '$20',
    click: 'Add',
  },
];
const See_All_Component = () => {
  const TitleComponent = () => (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: wp(4),
        marginTop: hp(2),
        justifyContent: 'space-between',
      }}>
      <TextView variant={'h4'} color={colors.commonText}>
        Milk,Curd & Panner
      </TextView>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <TextView style={styles.seeText} variant={'h6'} color={colors.green}>
          see all
        </TextView>
      </TouchableOpacity>
    </View>
  );
  const RenderShopCategory = ({item}) => (
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity>
        <View style={styles.backgroundView}>
          <Image source={item.diary_Product} style={styles.foodImageStyle} />

          <TextView variant={'sh6'} style={styles.diaryText}>
            {item.title}
          </TextView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp(3),
            }}>
            <TextView variant={'sh6'} style={styles.diaryText2}>
              {item.amount}
            </TextView>
            <TouchableOpacity
              style={{
                borderWidth: wp(0.5),
                alignSelf: 'center',
                borderColor: colors.green,
                height: hp(5),
                width: wp(13),
                borderRadius: wp(2),
              }}>
              <TextView
                variant={'h6'}
                color={colors.green}
                style={styles.diaryText1}>
                {item.click}
              </TextView>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView>
      <TitleComponent />
      <FlatList
        data={IMAGE}
        renderItem={RenderShopCategory}
        numColumns={2}
        style={{backgroundColor: colors.white, marginTop: hp(3)}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  seeText: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  backgroundView: {
    width: wp(42),
    height: hp(32),
    borderRadius: wp(6),
    marginHorizontal: wp(4),
    backgroundColor: colors.primaryBorderColor,
    marginTop: hp(3),
  },
  shopCategoryStyle: {
    marginTop: hp(4),
    marginHorizontal: wp(6),
  },
  foodImageStyle: {
    alignSelf: 'center',
    width: wp(30),
    height: wp(30),
    borderRadius: wp(3),
    marginTop: hp(3),
  },
  diaryText: {
    marginLeft: wp(3),
    marginTop: hp(2),
  },
  diaryText2: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  diaryText1: {
    alignSelf: 'center',
  },
});

export default See_All_Component;
