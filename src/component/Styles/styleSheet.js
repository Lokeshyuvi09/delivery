// import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
// import {wp} from '../utils/Dimensions';
import {wp} from '../../resources/dimensions';
import ThemeManager from '../../resources/utils/ThemeManager';

export const {width, height} = Dimensions.get('window');

export const commonColors = {
  black: '#000',
  white: '#fff',
  error: '#E35151',
  primaryTextColor: '#101010',
  secondaryTextColor: '#ACACAC',
  background: '#0B98AF',
  primaryBorderColor: '#D9D9D9',
  active: '#FB6304',
  lightColor: '#4B4B4B',
  inactiveColor: '#4B4B4B',
  GREYS: '#EAEBF3',
  videoTextTitleColor: '#EAEAEA',
  tab: '#F4F4F4',
  bgWhite: '#fff',
  inactive: '#F8D092',
  yellow: '#FFDD83',
  yellow_2: '#FCECD2',
  yellow_3: '#FDF5E7',
  yellow_4: 'rgba(240,151,18,.4)',
  lightBlue: '#DAF1F2',
  lightBlue_2: 'rgba(0,123,139,.8)',
  lightBlue_4: 'rgba(0,54,63,.4)',
  lightBlue_3: '#0D859B',
  BLUES: '#2B52F6',
  sunshine_yellow: '#FFFD37',
  green: '#00920D',
  green2: '#00363F',
  dark_blue: '#007B8B',
  medium_blue: '#00D5EF',
  medium_blue_opcatity: '#359FBC',
  light_opacity: '#2D87A1',
  light_opacity_2: '#39AAC3',
  light_opacity_3: '#007F8E',
  orange: '#FF4B3A',
  orange_2: '#F06229',
  orange_dark: '#802200',
  orange_dark_2: '#CC5A35',
  orange_dark_3: '#BB5530',
  dark_gold: '#806D00',
  brown: '#892800',
  border_purple: '#443963',
  purple_bg: 'rgba(33,25,53,.5)',
  yellow_5: '#FFC54D',
};

export const colors = new ThemeManager({
  DARK: {
    ...commonColors,
    commonText: '#000',
    white: '#fff',
    active_white: '#fff',
    primaryTextColor: '#101010',
    background: '#0B98AF',
    active: '#FB6304',
    primaryBorderColor: '#EAEAEA',
    secondaryView: '#F4F4F4',
    tabActive: 'white',
    subLocBg: '#f4f4f4',
    tagBorder: 'transparent',
    lightColor: '#4b4b4b',
    secondaryTextColor: '#ACACAC',
    headerTextColor: '#fff',
    itemSplitter: '#F5F5F5',
    appBackgroundColor: '#fff',
    shareBg: '#F4F4F4',
    titleTextColor: '#4D4949',
    BLUES: '#2B52F6',
  },
  LIGHT: {
    ...commonColors,
    commonText: '#fff',
    white: '#1E2021',
    active_white: '#313436',
    primaryTextColor: '#fff',
    background: '#0B98AF',
    active: '#FB6304',
    headerTextColor: '#101010',
    primaryBorderColor: '#2b2b2b',
    secondaryView: '#313436',
    tabActive: '#454A4D',
    subLocBg: '#1B1B1B',
    tagBorder: '#2b2b2b',
    lightColor: '#acacac',
    secondaryTextColor: '#fff',
    itemSplitter: '#000',
    appBackgroundColor: '#101010',
    shareBg: '#101010',
    titleTextColor: '#f4f4f4',
    BLUES: '#2B52F6',
  },
});

// export const colors = {
//   black: '#000',
//   white: '#fff',
//   primaryTextColor: '#3E3E3E',
//   background: '#0B98AF',
//   active: '#FB6304',
//   BLUES: '#2B52F6',
//   GREYS: {
//     C1: '#3E3E3E',
//     C2: '#7C7C7C',
//     C3: '#B3B3B3',
//     C4: '#EAEBF3',
//     C5: '#020202',
//     C6: '#676767',
//     C7: '#969696',
//     C8: '#5C5C5C',
//   },
//   GREEN: {
//     G1: '#00B58D',
//   },
// };

export const fonts = {
  //   light: Platform.OS === 'android' ? 'Montserrat-Light' : 'Montserrat-Light', // 300
  // regular: Platform.OS === 'android' ? 'DMSans-Regular' : 'DMSans-Regular', // 400
  medium: Platform.OS === 'android' ? 'DMSans-Medium' : 'DMSans-Medium', // 500
  //   semiBold:
  //     Platform.OS === 'android' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold', // 600
  // bold: Platform.OS === 'android' ? 'DMSans-Bold' : 'DMSans-Bold', // 700
  // boldSerif:    Platform.OS === 'android'      ? 'DMSerifDisplay-Regular'      : 'DMSerifDisplay-Regular', // 700
  //   extraBold:
  //     Platform.OS === 'android' ? 'Montserrat-ExtraBold' : 'Montserrat-ExtraBold', // 800
  //   black: Platform.OS === 'android' ? 'Montserrat-Black' : 'Montserrat-Black', // 900
  regular:
    Platform.OS === 'android' ? 'NunitoSans-Regular' : 'NunitoSans-Regular', // 400
  // medium: Platform.OS === 'android' ? 'DMSans-Medium' : 'DMSans-Medium', // 500
  // semiBold:    Platform.OS === 'android' ? 'DMSans-SemiBold' : 'DMSans-SemiBold', // 600
  bold: Platform.OS === 'android' ? 'NunitoSans-Bold' : 'NunitoSans-Bold', // 700
  boldSerif:
    Platform.OS === 'android'
      ? 'DMSerifDisplay-Regular'
      : 'DMSerifDisplay-Regular', // 700
  poppins_bold: 'NunitoSans-ExtraBold',
  poppins_regular: 'NunitoSans-Regular',
  poppins_medium: 'NunitoSans-SemiBold',
};

export const nunitoSans = {
  regular: 'NunitoSans-Regular',
  semiBold: 'NunitoSans-SemiBold',
  bold: 'NunitoSans-Bold',
};

export const ibmPlexSans = {
  regular: 'IBMPlexSans-Regular',
  semiBold: 'IBMPlexSans-SemiBold',
  bold: 'IBMPlexSans-Bold',
  regularMono: 'IBMPlexMono-Regular',
};

// export const fontSourceSerif = {
//   //   light: Platform.OS === 'android' ? 'Montserrat-Light' : 'Montserrat-Light', // 300
//   regular: Platform.OS === 'android' ? 'SourceSerifPro' : 'SourceSerifPro', // 400
//   medium: Platform.OS === 'android' ? 'DMSans-Medium' : 'DMSans-Medium', // 500
//   //   semiBold:
//   //     Platform.OS === 'android' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold', // 600
//   bold: Platform.OS === 'android' ? 'DMSans-Bold' : 'DMSans-Bold', // 700
//   boldSerif:
//     Platform.OS === 'android'
//       ? 'DMSerifDisplay-Regular'
//       : 'DMSerifDisplay-Regular', // 700
//   //   extraBold:
//   //     Platform.OS === 'android' ? 'Montserrat-ExtraBold' : 'Montserrat-ExtraBold', // 800
//   //   black: Platform.OS === 'android' ? 'Montserrat-Black' : 'Montserrat-Black', // 900
// };

export const fontSizes = {
  boldLarge: {fontSize: width <= 320 ? wp(16.66) : wp(16.66)}, // 60px
  larger: {fontSize: width <= 320 ? wp(8.3) : wp(8.3)}, // larger
  large: {fontSize: width <= 320 ? wp(7.9) : wp(7.9)}, // larger
  medium: {fontSize: width <= 320 ? wp(7.3) : wp(7.3)}, // medium
  h1: {fontSize: width <= 320 ? wp(6.95) : wp(6.95)}, // 26 large
  h2: {fontSize: width <= 320 ? wp(6.4) : wp(6.4)}, // 24
  h3: {fontSize: width <= 320 ? wp(5.87) : wp(5.87)}, // 22
  h4: {fontSize: width <= 320 ? wp(5.35) : wp(5.35)}, // 20
  h5: {fontSize: width <= 320 ? wp(4.8) : wp(4.8)}, // 18
  h6: {fontSize: width <= 320 ? wp(4.3) : wp(4.3)}, // 16 medium
  h7: {fontSize: width <= 320 ? wp(3.75) : wp(3.75)}, // 14 regular
  h8: {fontSize: width <= 320 ? wp(3.2) : wp(3.2)}, // 13 or 12 small
  h9: {fontSize: width <= 320 ? wp(2.8) : wp(2.8)}, // 11 or 10 xsmall
};

export const nunitoTypeFace = {
  regular: {
    large: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.large,
      color: colors.commonText,
    },
    h1: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: nunitoSans.regular,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  semiBold: {
    h1: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: nunitoSans.semiBold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  bold: {
    boldLarge: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.boldLarge,
      color: colors.commonText,
    },
    large: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.large,
      color: colors.commonText,
    },
    medium: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.medium,
      color: colors.commonText,
    },
    h1: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: nunitoSans.bold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
};

export const ibmTypeFace = {
  regular: {
    large: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.large,
      color: colors.commonText,
    },
    h1: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: ibmPlexSans.regular,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  regularMono: {
    large: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.large,
      color: colors.commonText,
    },
    h1: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: ibmPlexSans.regularMono,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  semiBold: {
    h1: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: ibmPlexSans.semiBold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  bold: {
    boldLarge: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.boldLarge,
      color: colors.commonText,
    },
    large: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.large,
      color: colors.commonText,
    },
    medium: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.medium,
      color: colors.commonText,
    },
    h1: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: ibmPlexSans.bold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
};

export const typography = {
  regular: {
    large: {
      fontFamily: fonts.regular,
      ...fontSizes.large,
      color: colors.commonText,
    },
    h1: {
      fontFamily: fonts.regular,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.regular,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.regular,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.regular,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.regular,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.regular,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.regular,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.regular,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.regular,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  medium: {
    h1: {
      fontFamily: fonts.medium,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.medium,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.medium,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.medium,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.medium,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.medium,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.medium,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.medium,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.medium,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  bold: {
    boldLarge: {
      fontFamily: fonts.bold,
      ...fontSizes.boldLarge,
      color: colors.commonText,
    },
    large: {
      fontFamily: fonts.bold,
      ...fontSizes.large,
      color: colors.commonText,
    },
    medium: {
      fontFamily: fonts.bold,
      ...fontSizes.medium,
      color: colors.commonText,
    },
    h1: {
      fontFamily: fonts.bold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.bold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.bold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.bold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.bold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.bold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.bold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.bold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.bold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  boldSerif: {
    larger: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.larger,
      color: colors.commonText,
    },
    large: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.large,
      color: colors.commonText,
    },
    medium: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.medium,
      color: colors.commonText,
    },
    h1: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.boldSerif,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
};

export const poppins = {
  regular: {
    large: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.large,
      color: colors.commonText,
    },
    h1: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.poppins_regular,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  medium: {
    h1: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.poppins_medium,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
  bold: {
    boldLarge: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.boldLarge,
      color: colors.commonText,
    },
    large: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.large,
      color: colors.commonText,
    },
    medium: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.poppins_medium,
      color: colors.commonText,
    },
    h1: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h1,
      color: colors.commonText,
    },
    h2: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h2,
      color: colors.commonText,
    },
    h3: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h3,
      color: colors.commonText,
    },
    h4: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h4,
      color: colors.commonText,
    },
    h5: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h5,
      color: colors.commonText,
    },
    h6: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h6,
      color: colors.commonText,
    },
    h7: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h7,
      color: colors.commonText,
    },
    h8: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h8,
      color: colors.commonText,
    },
    h9: {
      fontFamily: fonts.poppins_bold,
      ...fontSizes.h9,
      color: colors.commonText,
    },
  },
};

export const Custompadding = {
  // 35
  paddingXXLarge: {padding: wp('9.35')},
  paddingTopBottomXXLarge: {
    paddingTop: wp('9.35'),
    paddingBottom: wp('9.35'),
  },
  paddingLeftRightXXLarge: {
    paddingLeft: wp('9.35'),
    paddingRight: wp('9.35'),
  },
  paddingTopXXLarge: {
    paddingTop: wp('9.35'),
  },
  paddingBottomXXLarge: {
    paddingBottom: wp('9.35'),
  },
  paddingLeftXXLarge: {
    paddingLeft: wp('9.35'),
  },
  paddingRightXXLarge: {
    paddingRight: wp('9.35'),
  },
  // 25
  paddingXLarge: {padding: wp('6.7')},
  paddingTopBottomXLarge: {
    paddingTop: wp('6.7'),
    paddingBottom: wp('6.7'),
  },
  paddingLeftRightXLarge: {
    paddingLeft: wp('6.7'),
    paddingRight: wp('6.7'),
  },
  paddingTopXLarge: {
    paddingTop: wp('6.7'),
  },
  paddingBottomXLarge: {
    paddingBottom: wp('6.7'),
  },
  paddingLeftXLarge: {
    paddingLeft: wp('6.7'),
  },
  paddingRightXLarge: {
    paddingRight: wp('6.7'),
  },
  // 20
  paddingLarge: {padding: wp('5.4')},
  paddingTopBottomLarge: {
    paddingTop: wp('5.4'),
    paddingBottom: wp('5.4'),
  },
  paddingLeftRightLarge: {
    paddingLeft: wp('5.4'),
    paddingRight: wp('5.4'),
  },
  paddingBottomLarge: {
    paddingBottom: wp('5.4'),
  },
  paddingRightLarge: {
    paddingRight: wp('5.4'),
  },
  paddingLeftLarge: {
    paddingLeft: wp('5.4'),
  },
  paddingTopLarge: {
    paddingTop: wp('5.4'),
  },
  // 15
  paddingRegular: {padding: wp('4')},
  paddingLeftRightRegular: {
    paddingLeft: wp('4'),
    paddingRight: wp('4'),
  },
  paddingTopBottomRegular: {
    paddingTop: wp('4'),
    paddingBottom: wp('4'),
  },
  paddingTopRegular: {
    paddingTop: wp('4'),
  },
  paddingBottomRegular: {
    paddingBottom: wp('4'),
  },
  paddingLeftRegular: {
    paddingLeft: wp('4'),
  },
  paddingRightRegular: {
    paddingRight: wp('4'),
  },
  // 10
  paddingSmall: {padding: wp('2.7')},
  paddingLeftRightSmall: {
    paddingLeft: wp('2.7'),
    paddingRight: wp('2.7'),
  },
  paddingTopBottomSmall: {
    paddingTop: wp('2.7'),
    paddingBottom: wp('2.7'),
  },
  paddingTopSmall: {
    paddingTop: wp('2.7'),
  },
  paddingBottomSmall: {
    paddingBottom: wp('2.7'),
  },
  paddingLeftSmall: {
    paddingLeft: wp('2.7'),
  },
  paddingRightSmall: {
    paddingRight: wp('2.7'),
  },

  // 5
  paddingXSmall: {padding: wp('1.35')},
  paddingLeftRightXSmall: {
    paddingLeft: wp('1.35'),
    paddingRight: wp('1.35'),
  },
  paddingTopBottomXSmall: {
    paddingTop: wp('1.35'),
    paddingBottom: wp('1.35'),
  },
  paddingTopXSmall: {
    paddingTop: wp('1.35'),
  },
  paddingBottomXSmall: {
    paddingBottom: wp('1.35'),
  },
  paddingLeftXSmall: {
    paddingLeft: wp('1.35'),
  },
  paddingRightXSmall: {
    paddingRight: wp('1.35'),
  },
};
