/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors} from '../../../component/Styles/styleSheet';

const IMAGE = [
  {
    uri: 'https://giri.in/safemart/media/catalog/product/cache/4/image/800x700/ac7adcb9541839760db32faba84f4f33/8/0/807177-1.jpg',
    pics: 'https://img-global.cpcdn.com/recipes/ce9bfff18ad1192a/1200x630cq70/photo.jpg',
    product: 'Milk',
    items: '10 products',
    count: '+6',
  },
  {
    pics: 'https://img-global.cpcdn.com/recipes/ce9bfff18ad1192a/1200x630cq70/photo.jpg',
    uri: 'https://www.shutterstock.com/image-photo/home-made-cottage-cheese-known-260nw-1800581245.jpg',
    product: 'Vegetables',
    items: '10 products',
    count: '+10',
  },
  {
    uri: 'https://img-global.cpcdn.com/recipes/ce9bfff18ad1192a/1200x630cq70/photo.jpg',
    pics: 'https://www.shutterstock.com/image-photo/home-made-cottage-cheese-known-260nw-1800581245.jpg',
    product: 'Cooking Oil',
    items: '10 products',
    count: '+6',
  },
];

const BestSellersComponent = () => {
  const TitleComponent = () => (
    <View style={styles.titleView}>
      <TextView variant={'h5'} color={colors.black} style={styles.sellerStyle}>
        Bestsellers
      </TextView>
      <TouchableOpacity>
        <TextView
          variant={'sh6'}
          color={colors.green}
          style={styles.sellerStyle}>
          see all
        </TextView>
      </TouchableOpacity>
    </View>
  );

  const RenderBestSeller = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.backgroundFirstView}>
          <View style={styles.backgroundSecondView}>
            <Image source={{uri: item.uri}} style={styles.foodImageStyle} />
            <Image source={{uri: item.pics}} style={styles.foodImageStyle} />
          </View>
          <View style={styles.backgroundThirdView}>
            <Image source={{uri: item.uri}} style={styles.foodImageStyle} />
            <View style={styles.foodTextView}>
              <TextView
                variant={'h5'}
                color={colors.black}
                style={styles.foodImageText}>
                {item.count}
              </TextView>
            </View>
          </View>
        </View>
        <TextView
          variant={'sh5'}
          color={colors.primaryTextColor}
          style={styles.imageText}>
          {item.product}
        </TextView>
        <TextView
          variant={'sh8'}
          color={colors.primaryTextColor}
          style={styles.itemsText}>
          {item.items}
        </TextView>
      </TouchableOpacity>
    </View>
  );

  const HorizontalFlatList = () => (
    <View style={styles.flatListStyles}>
      <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
    </View>
  );

  const BodyComponent = () => (
    <ScrollView horizontal>
      <View style={styles.bodyView}>
        <HorizontalFlatList />
      </View>
    </ScrollView>
  );

  return (
    <View>
      <TitleComponent />
      <BodyComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  sellerStyle: {
    marginHorizontal: wp(6),
    marginTop: hp(2),
  },
  bodyView: {
    flexDirection: 'row',
  },
  itemsText: {
    marginTop: hp(-1),
    marginLeft: wp(5),
    maxWidth: wp(25),
  },
  imageText: {
    marginLeft: wp(5),
    maxWidth: wp(25),
    // alignSelf: 'center',
  },
  titleView: {flexDirection: 'row', justifyContent: 'space-between'},
  backgroundFirstView: {
    width: wp(40),
    height: hp(20),
    borderRadius: wp(6),
    marginLeft: wp(2),
    marginTop: hp(2),
    backgroundColor: colors.lightBlue,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backgroundSecondView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backgroundThirdView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1.5),
  },
  foodImageStyle: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(2),
  },
  foodTextView: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(2),
    backgroundColor: colors.white,
  },
  foodImageText: {alignSelf: 'center', marginTop: hp(1.7)},
  flatListStyles: {
    flexDirection: 'row',
  },
  productsStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  diaryTextStyle: {
    marginLeft: wp(-5),
  },
  seeAllStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  seeAllButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: wp(3),
    alignItems: 'center',
    marginTop: hp(1),
    width: wp(30),
    height: hp(5),
    borderWidth: wp(0.2),
    marginRight: wp(3),
    borderColor: colors.green,
  },
});

export default BestSellersComponent;
