import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

type Props = TouchableOpacityProps & {};

export function Button({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>Encurtar</Title>
    </Container>
  );
}
