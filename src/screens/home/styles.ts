import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 50px;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const Nav = styled.View`
  flex-direction: row;
`;

export const NavMid = styled.View`
  width: 130px;
  height: 40px;
  flex-direction: row;
`;

export const NavMidButtons = styled.TouchableOpacity`
  width: 34.5px;
  height: 33px;
  margin-right: 2px;
  margin-top: 4px;
  align-items: center;
 
`;

export const Perfil = styled(RectButton)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 45px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
`;

export const PerfilFoto = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 45px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;

export const NavTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 11px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;

