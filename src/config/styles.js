import * as Colors from './colors';
import { scaleW, scaleH } from 'utils/scale';

export const container = {
  flex: 1,
  backgroundColor: Colors.background,
};

export const formButton = {
  height: scaleH(50),
  borderRadius: scaleH(5),
  color: Colors.white,
  backgroundColor: 'transparent',
  fontSize: scaleH(24),
  borderWidth: 1,
  borderColor: Colors.primary,
};

export const formButtonTitle = {
  color: Colors.label,
  fontSize: scaleH(24),
  fontWeight: '800',
  textAlign: 'center',
};

export const formLabel = {
  color: Colors.label,
  fontWeight: '500',
  fontSize: scaleH(16),
  paddingBottom: scaleH(10),
};

export const formInput = {
  height: scaleH(50),
  borderRadius: scaleH(5),
  borderWidth: 1,
  fontSize: scaleH(8),
  borderColor: Colors.primary,
};

export const formInputStyle = {
  fontSize: scaleH(18),
  color: Colors.label,
};

export const formDisabledButton = {
  backgroundColor: '#CCCCCC',
  borderColor: '#CCCCCC',
};

export const formDisabledButtonText = {
  color: Colors.white,
};

export const checkBoxContainer = {
  width: '100%',
  backgroundColor: Colors.white,
  marginLeft: 0,
  padding: 0,
  borderWidth: 0,
};

export const checkBoxText = {
  fontSize: scaleH(11),
  lineHeight: scaleH(13),
  fontWeight: '500',
  color: Colors.primary,
  marginLeft: scaleW(5),
};
