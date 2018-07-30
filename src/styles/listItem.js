import { basicTextStyles } from './common';

export default {
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 5,
    marginRight: 5,
  },
  inputStyle: {
    height: 20,
    width: 100,
    alignItems: 'center',
    fontSize: 16,
  },
  textStyle: {
    ...basicTextStyles,
    paddingBottom: 2,
    fontWeight: '700',
  },
  priceText: {
    ...basicTextStyles,
    paddingBottom: 2,
  }
};
