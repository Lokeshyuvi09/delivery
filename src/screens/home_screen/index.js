import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';
import BestSellersComponent from '../../component/ScreenComponents/home/BestsellerComponent';
import ShopCategoryComponent from '../../component/ScreenComponents/home/shopbycategoryComponent';
import HeaderComponent from '../../component/ScreenComponents/home/headerComponent';
import SearchComponent from '../../component/ScreenComponents/home/searchComponent';
import CookingIdeasComponent from '../../component/ScreenComponents/home/cookingIdeasComponent';
import LowestPricesComponent from '../../component/ScreenComponents/home/lowestpricesComponent';
import BrandItemsComponent from '../../component/ScreenComponents/home/bandItemsComponent';
const Home_Screen = () => {
  return (
    <SafeAreaView style={styles.parrentContainer}>
      <ScrollView>
        <HeaderComponent />
        <SearchComponent />
        <BestSellersComponent />
        <ShopCategoryComponent />
        <CookingIdeasComponent />
        <LowestPricesComponent />
        <BrandItemsComponent />
        <BestSellersComponent />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.white,
    height: hp(100),
    paddingBottom: hp(4),
  },
});

export default Home_Screen;
