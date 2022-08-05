import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  InputText,
} from './styles';

type Props = TextInputProps & {
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused} >
        <MaterialIcons
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? '#E83F5B' : '#E83F5B'}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
}
