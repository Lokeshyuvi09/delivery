/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../resources/dimensions';
import {TextView} from '../../TextView';
import {colors} from '../../Styles/styleSheet';
import {ScrollView} from 'react-native';

const IMAGE = [
  {
    uri: 'https://m.media-amazon.com/images/I/81QDsW0zGdL.jpg',
    product: 'Milk',
    items: '1 L',
    discount: '10%',
    timer: '15 MINS',
    amount: '$20',
    click: 'Add',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzd_UwDg1_SA6XvaW9A3C6h8CxEPxkrRP6Xg&usqp=CAU',
    product: 'Vegetables',
    items: '12 x 70g',
    discount: '10%',
    timer: '15 MINS',
    amount: '$20',
    click: 'Add',
  },
  {
    uri: 'https://giri.in/safemart/media/catalog/product/cache/4/image/800x700/ac7adcb9541839760db32faba84f4f33/8/0/807177-1.jpg',
    product: 'Cooking Oil',
    items: '500g',
    discount: '10%',
    timer: '15 MINS',
    amount: '$20',
    click: 'Add',
  },
];
const LowestPricesComponent = () => {
  const TitleComponent = () => (
    <View style={styles.titleView}>
      <View style={styles.horizontalLine} />
      <TextView variant={'h2'} color={colors.BLUES} style={styles.titleText}>
        LOWEST PRICES
      </TextView>
      <View style={styles.horizontalLine} />
    </View>
  );
  const RenderBestSeller = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.backgroundFirstView}>
          <View style={styles.flagView}>
            <TextView
              variant={'h8'}
              color={colors.white}
              styles={styles.discountText}>
              {item.discount}
            </TextView>
          </View>
          <Image source={{uri: item.uri}} style={styles.foodImageStyle} />
        </View>
        <View style={styles.productView}>
          <TextView
            variant={'h8'}
            color={colors.black}
            styles={styles.timeText}>
            {item.timer}
          </TextView>
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
      <View style={styles.subView}>
        <TextView variant={'sh6'} style={styles.amountText}>
          {item.amount}
        </TextView>
        <TouchableOpacity style={styles.addButton}>
          <TextView variant={'h6'} color={colors.green} style={styles.addText}>
            {item.click}
          </TextView>
        </TouchableOpacity>
      </View>
    </View>
  );

  // // eslint-disable-next-line react/no-unstable-nested-components
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
  titleText: {
    alignItems: 'center',
    margin: hp(1),
  },
  timeText: {alignItems: 'center', alignSelf: 'center'},
  bodyView: {
    flexDirection: 'row',
  },
  flagView: {
    width: wp(8),
    height: hp(4),
    backgroundColor: colors.BLUES,
    alignItems: 'center',
  },
  productView: {
    width: wp(15),
    height: hp(3),
    backgroundColor: colors.primaryBorderColor,
    alignItems: 'center',
    marginLeft: wp(4),
  },
  sellerStyle: {
    marginHorizontal: wp(6),
    marginTop: hp(2),
  },
  horizontalLine: {
    borderWidth: wp(0.1),
    borderColor: colors.secondaryTextColor,
    width: wp(30),
    height: hp(0.1),
  },
  discountText: {alignItems: 'center', alignSelf: 'center'},
  itemsText: {
    marginTop: hp(-1),
    marginLeft: wp(5),
    maxWidth: wp(25),
  },
  imageText: {
    marginLeft: wp(5),
    maxWidth: wp(25),
  },
  backgroundFirstView: {
    width: wp(35),
    height: hp(20),
    borderRadius: wp(3),
    marginLeft: wp(4),
    marginTop: hp(2),
    borderColor: colors.GREYS,
    borderWidth: wp(0.4),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flexDirection: 'row',
    marginTop: hp(3),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  foodImageStyle: {
    width: wp(20),
    height: hp(15),
    alignSelf: 'center',
    marginLeft: wp(-1),
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
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp(3),
  },
  addButton: {
    borderWidth: wp(0.5),
    alignSelf: 'center',
    borderColor: colors.green,
    height: hp(4),
    width: wp(17),
    borderRadius: wp(2),
  },
  amountText: {
    marginLeft: wp(5),
    marginTop: hp(1),
  },
  addText: {
    alignSelf: 'center',
    marginTop: hp(-0.3),
  },
});

export default LowestPricesComponent;
