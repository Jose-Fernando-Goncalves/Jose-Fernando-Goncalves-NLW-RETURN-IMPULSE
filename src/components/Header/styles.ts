import styled from 'styled-components/native';
import theme from '../../theme';
import {StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
  Indic:{
    backgroundColor: theme.COLORS.WHITE,
    
  }
});

export const Container = styled.View`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
`;



export const LinearColor = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.COLORS.GRADIENT,
  
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;