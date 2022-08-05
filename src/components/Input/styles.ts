import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

type Props = {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 56px;
`;

export const IconContainer = styled.View<Props>`
  width: 56px;
  height: 56px;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  background-color: #FFF;
  ${({ isFocused }) => isFocused && css`
    border-left-width: 2px;
    border-color: #E83F5B;
  `};
`;

export const InputText = styled(TextInput) <Props>`
  flex: 0.9;
  padding: 0 16px;
  background-color: white;
  font-size: 14px;
  color: #172C38;
`;

export const Clear = styled.TouchableOpacity`
  flex: 0.1;
  padding-right: 20px;
  background-color: #FFF;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;
