import { mainColor } from './common';

export default {
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonTypeLeft: {
    paddingLeft: 40,
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonTypeRight: {
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
  },
  selectedStyle: {
    backgroundColor: '#233446',
  },
  selectedText: {
    fontWeight: '700',
    color: '#fff',
  },
  notSelectedText: {
    fontWeight: 'normal',
    color: '#000',
  },
  textStyle: {
    paddingBottom: 3,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  headerContent: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  typeContainer: {
    flex: 1,
    alignItems: 'center'
  },
  sectionHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  seperatedButtons: {
    marginBottom: 40,
    flexDirection: 'row',
    borderColor: mainColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#233446',
    width: 160,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldWhiteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    height: '60%',
    backgroundColor: 'rgba(0,0,0,0.35)',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  modalStyle: {
    justifyContent: 'center',
    height: '30%',
    backgroundColor: '#FFFEFF',
    borderColor: 'rgba(94, 94, 94, 0.3)',
    borderTopWidth: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    alignItems: 'flex-end'
  }
};
