import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

type Props = TouchableOpacityProps & {
  isLoading: boolean;
};

export function Button({ isLoading = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      {
        isLoading ? <ActivityIndicator color='#FFF' /> : <Title>Encurtar</Title>
      }

    </Container>
  );
}
