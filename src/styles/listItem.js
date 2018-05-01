import { basicTextStyles } from './common';

export default {
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'rgba(94, 94, 94, 0.3)',
    borderBottomWidth: 1,
  },
  textContainer: {
    flexDirection: 'row',
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
  },
};
