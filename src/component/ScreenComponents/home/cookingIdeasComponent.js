/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {TextView} from '../../TextView';
import {wp, hp} from '../../../resources/dimensions';
import {colors} from '../../Styles/styleSheet';

const IMAGE = [
  {
    pics: 'https://i0.wp.com/www.lovefoodasia.com/wp-content/uploads/2021/07/Brinjal_Recipe.jpg?fit=1200%2C802&ssl=1&resize=350%2C200',
    text: 'Tofu',
  },
  {
    pics: 'https://foodsandflavorsbyshilpi.com/wp-content/uploads/2021/04/NEW-FB-Thumbnails-Website-2021-17.jpg',
    text: 'TomatoSoup',
  },
  {
    pics: 'https://i0.wp.com/www.lovefoodasia.com/wp-content/uploads/2021/07/Brinjal_Recipe.jpg?fit=1200%2C802&ssl=1&resize=350%2C200',
    text: 'Tofu',
  },
  {
    pics: 'https://foodsandflavorsbyshilpi.com/wp-content/uploads/2021/04/NEW-FB-Thumbnails-Website-2021-17.jpg',
    text: 'TomatoSoup',
  },
];

const CookingIdeasComponent = () => {
  const TitleComponent = () => (
    <View style={styles.titleView}>
      <TextView variant={'h5'} color={colors.black} style={styles.sellerStyle}>
        Cooking Ideas
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
  const RenderCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View>
          <Image source={{uri: item.pics}} style={styles.foodImageStyle} />
        </View>
      </TouchableOpacity>
      <TextView
        variant={'sh4'}
        color={colors.commonText}
        style={styles.diaryText}>
        {item.text}
      </TextView>
    </View>
  );

  const HorizontalFlatList = () => (
    <View style={styles.flatListStyles}>
      <FlatList data={IMAGE} renderItem={RenderCategory} horizontal />
    </View>
  );

  return (
    <View>
      <TitleComponent />
      <HorizontalFlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  sellerStyle: {
    marginHorizontal: wp(6),
    marginTop: hp(2),
  },
  titleView: {flexDirection: 'row', justifyContent: 'space-between'},
  foodImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
    marginLeft: wp(3),
  },
  flatListStyles: {
    marginTop: hp(1),
    flexDirection: 'row',
    marginLeft: wp(2),
    justifyContent: 'space-evenly',
  },
  diaryText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
});

export default CookingIdeasComponent;
