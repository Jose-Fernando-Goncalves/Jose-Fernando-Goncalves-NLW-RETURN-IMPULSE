import styled from 'styled-components/native';
import theme from '../../theme';
import {StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const styles = StyleSheet.create({
  Indic:{
    backgroundColor: theme.COLORS.WHITE,
  }
});

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  position: absolute;
`;

export const ModalFeed = styled(BottomSheet)`
`;



export const ButtonFeed = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 12px;
`;

export const ButtonFeedContent = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 12px;
  margin: 2px;
  border: 2.8px;
  border-color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const FeedsContent = styled.View`
  width: 85%;
  height: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Feeds = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const FeedsContentText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FeedForm= styled.TextInput`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border: 4px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.COLORS.SUBTEXT};
  padding: 10px;
  margin-top: 20px;
`;

export const LinearColor = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.COLORS.GRADIENT,
  
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FeedSubmite = styled(RectButton)`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 12px;
  border-color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const PhotoButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  margin-right: 5%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  border-radius: 12px;
  border-color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const PhotoIMG = styled.Image`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

`;


