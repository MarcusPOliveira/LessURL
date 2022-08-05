import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #172C38;
`;

export const Header = styled.View`
  height: 30%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  color: #E83F5B;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  color: #FFF;
`;

export const Forms = styled.View`
  width: 100%;
  height: 60%;
  padding: 30px 20px;
`;

export const FormTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
  margin-top: 20px;
  color: #FFF;
`;

export const ResultContent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 70px;
  border-radius: 10px;
  border: 1px dashed #FFF;
  margin-top: 20px;
`;

export const URL = styled.Text`
  font-size: 22px;
  color: #FFF;
`;
