import Category_Page from './screens/category_page';
import Home_Screen from './screens/home_screen';
import Login from './screens/login';
import My_Account from './screens/my_account';
import Otp_Screen from './screens/otp_screen';
import SplashScreen from './screens/splash-screen';
import Update_Profile from './screens/update_profile';
import See_All_Component from './screens/home_screen/seeAll';

const SCREENS = {
  SPLASH_SCREEN: SplashScreen,
  LOGIN: Login,
  OTP_SCREEN: Otp_Screen,
  UPDATE_PROFILE: Update_Profile,
  HOME_SCREEN: Home_Screen,
  CATEGORY_PAGE: Category_Page,
  MY_ACCOUNT: My_Account,
  SEE_ALL_COMPONENT: See_All_Component,
};

export default SCREENS;
