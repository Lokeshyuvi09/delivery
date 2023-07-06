import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors} from '../../../component/Styles/styleSheet';

const IMAGE = [
  {
    pics: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
    text: 'Vegetables',
  },
  {
    pics: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/11/26/1385481622740/5b112f8a-95d9-4bd0-a2b1-1819b3bb6f1d-bestSizeAvailable.png?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e97c3f24da1c2269607eecdd476fba7f',
    text: 'Cooldrinks',
  },
  {
    pics: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMQLvqEhaPwC2hefnwP_QdSvNGePUcrUHiQ&usqp=CAU',
    text: 'munchies',
  },
  {
    pics: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UCQb7IbeKqCMAFGfewkjn9uw0_BfNrH92A&usqp=CAU',
    text: 'Noodles',
  },
];

const ShopCategoryComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderShopCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.backgroundView}>
          <Image source={{uri: item.pics}} style={styles.foodImageStyle} />
        </View>
      </TouchableOpacity>
      <Text style={styles.diaryText}>{item.text}</Text>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalFlatList = () => (
    <View style={styles.flatListStyles}>
      <FlatList data={IMAGE} renderItem={RenderShopCategory} numColumns={4} />
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components, no-unused-vars
  const ShopCategoryText = () => (
    <View>
      <TextView
        variant={'h5'}
        color={colors.black}
        style={styles.shopCategoryStyle}>
        Shop by Category
      </TextView>
    </View>
  );
  return (
    <View>
      <ShopCategoryText />
      <HorizontalFlatList />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundView: {
    width: wp(22),
    height: hp(12),
    borderRadius: wp(6),
    marginLeft: wp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  shopCategoryStyle: {
    marginTop: hp(4),
    marginHorizontal: wp(6),
  },
  foodImageStyle: {
    alignSelf: 'center',
    width: wp(18),
    height: wp(18),
    borderRadius: wp(3),
  },
  flatListStyles: {
    marginTop: hp(1),
    flexDirection: 'row',
  },
  diaryText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
});

export default ShopCategoryComponent;
