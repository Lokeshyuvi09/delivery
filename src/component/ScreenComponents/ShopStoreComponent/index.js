import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors, commonColors} from '../../../component/Styles/styleSheet';
import {LocalImageView} from '../../../component/Image/index';
import Images from '../../../resources/images';

const DATA = [
  {
    health_Drinks: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
];

const ShopStoreComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const McDonalscomponent = () => (
    <View>
      <View style={styles.backgroundView}>
        <LocalImageView
          style={styles.mcDonaldsImageStyle}
          imagePath={Images.mcDonalds}
        />
        <TextView
          variant={'h8'}
          color={colors.black}
          style={styles.btsTextStyle}>
          The BTS Meal
        </TextView>
        <TextView
          variant={'h8'}
          color={colors.black}
          style={styles.shopNameStyle}>
          from Mcdonald's
        </TextView>
      </View>
      {/* <Text style={styles.heaithDrinksText}>{item.item_name}</Text> */}
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const StoreTextComponent = () => (
    <View>
      <TextView
        variant={'h3'}
        color={colors.black}
        style={styles.storeTextStyle}>
        Shop by Store
      </TextView>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderHealthDrinkCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.healthDrinksBackgroundView}>
          <Image
            source={item.health_Drinks}
            style={styles.healthDrinksImageStyle}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.healthDrinksText}>{item.item_name}</Text>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalHealthDrinksFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.healthDrinkFlatListStyles}>
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
      </View>
    </ScrollView>
  );

  return (
    <View>
      <McDonalscomponent />
      <StoreTextComponent />
      <HorizontalHealthDrinksFlatList />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundView: {
    width: wp(86),
    height: hp(26),
    borderRadius: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mcDonaldsImageStyle: {
    alignSelf: 'center',
    width: wp(85),
    height: hp(20),
    marginTop: hp(1),
  },
  btsTextStyle: {
    marginTop: hp(0),
    alignSelf: 'center',
  },
  shopNameStyle: {
    marginTop: hp(0),
    alignSelf: 'center',
  },
  healthDrinksBackgroundView: {
    width: wp(26),
    height: hp(15),
    borderRadius: wp(6),
    marginLeft: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  healthDrinksImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
  },
  healthDrinksText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
  healthDrinkFlatListStyles: {
    marginTop: hp(2),
    flexDirection: 'row',
  },
  storeTextStyle: {
    marginTop: hp(2),
    marginHorizontal: wp(6),
  },
});
export default ShopStoreComponent;
