import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
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
  // eslint-disable-next-line react/no-unstable-nested-components
  const TitleComponent = () => (
    <View style={styles.titleText}>
      <TextView variant={'h4'} color={colors.commonText}>
        Milk,Curd & Panner
      </TextView>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <TextView style={styles.seeAllText} variant={'h6'} color={colors.green}>
          see all
        </TextView>
      </TouchableOpacity>
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderShopCategory = ({item}) => (
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity>
        <View style={styles.backgroundView}>
          <Image source={item.diary_Product} style={styles.foodImageStyle} />

          <TextView variant={'sh6'} style={styles.diaryText}>
            {item.title}
          </TextView>
          <View style={styles.subView}>
            <TextView variant={'sh6'} style={styles.diaryText2}>
              {item.amount}
            </TextView>
            <TouchableOpacity style={styles.addButton}>
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
      <ScrollView style={{marginBottom: wp(5)}}>
        <TitleComponent />
        <FlatList
          data={IMAGE}
          renderItem={RenderShopCategory}
          numColumns={2}
          style={styles.imageViewStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  seeAllText: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageViewStyle: {
    backgroundColor: colors.white,
    marginTop: hp(2),
    // bottom: hp(13),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp(3),
  },
  addButton: {
    borderWidth: wp(0.5),
    alignSelf: 'center',
    borderColor: colors.green,
    height: hp(5),
    width: wp(13),
    borderRadius: wp(2),
  },
  titleText: {
    flexDirection: 'row',
    marginHorizontal: wp(4),
    marginTop: hp(2),
    justifyContent: 'space-between',
  },
  backgroundView: {
    width: wp(42),
    height: hp(32),
    borderRadius: wp(6),
    marginHorizontal: wp(4),
    backgroundColor: colors.primaryBorderColor,
    marginTop: hp(2),
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
