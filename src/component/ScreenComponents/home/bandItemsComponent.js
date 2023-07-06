import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Carousel} from 'react-native-auto-carousel';
import {hp, wp} from '../../../resources/dimensions';
import {colors} from '../../Styles/styleSheet';
import {TextView} from '../../TextView';

const Data = [
  {
    pics: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/files/Mobile-Main-banner-750x500-10_6e7938f8-fe39-47bb-beb2-65a7a83225f2.jpg?v=1657614147',
    text: 'Shop now',
  },
  {
    pics: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/files/Mobile-Main-banner-750x500-10_6e7938f8-fe39-47bb-beb2-65a7a83225f2.jpg?v=1657614147',
    text: 'Shop now',
  },
  {
    pics: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/files/Mobile-Main-banner-750x500-10_6e7938f8-fe39-47bb-beb2-65a7a83225f2.jpg?v=1657614147',
    text: 'Shop now',
  },
  {
    pics: 'https://giri.in/safemart/media/catalog/product/cache/4/image/800x700/ac7adcb9541839760db32faba84f4f33/8/0/807177-1.jpg',
    text: 'Shop now',
  },
  {
    pics: 'https://giri.in/safemart/media/catalog/product/cache/4/image/800x700/ac7adcb9541839760db32faba84f4f33/8/0/807177-1.jpg',
    text: 'Shop now',
  },
];

const BrandItemsComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const CardContainer = () => (
    <View style={{marginTop: hp(4)}}>
      <Carousel
        width={100}
        data={Data}
        renderItem={CarouselCardItem}
        autoPlay
      />
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const CarouselCardItem = ({item}) => (
    <View>
      <View style={styles.cardStyle}>
        <Image
          source={{
            //   uri: item.pics,
            uri: 'https://cdn.shopify.com/s/files/1/0504/8841/0290/files/Mobile-Main-banner-750x500-10_6e7938f8-fe39-47bb-beb2-65a7a83225f2.jpg?v=1657614147',
          }}
          style={styles.eclipseImage}
        />
      </View>
      <TouchableOpacity style={styles.shopClick}>
        <TextView
          variant={'h8'}
          color={colors.commonText}
          style={styles.textstyle}>
          Shop now
        </TextView>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <CardContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  shopClick: {
    width: wp(20),
    height: hp(5),
    backgroundColor: colors.white,
    marginHorizontal: wp(5),
    marginTop: -hp(7),
    justifyContent: 'center',
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: wp(1),
  },
  textstyle: {
    alignSelf: 'center',
  },
  eclipseImage: {
    width: wp(98),
    height: hp(25),
    borderRadius: wp(5),
  },
});

export default BrandItemsComponent;
