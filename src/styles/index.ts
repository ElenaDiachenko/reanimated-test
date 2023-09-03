import {StyleSheet} from 'react-native';

export const palette = {
  accentColor: 'teal',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  warningText: '#ff001b',
  footerTextColor: '#545454',
  mainBgColor: '#303030',
  modalGreyText: '#8c8c8c',
  modalNumberGreyBg: '#f7f7f7',
  footerBgColor: '#f7f7f7',
  paginationArrowBg: '#f7f7f7',
};

export const commonStyles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    color: palette.mainBgColor,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: palette.whiteColor,
  },
});
