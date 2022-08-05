import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  InputText,
  Clear,
} from './styles';

type Props = TextInputProps & {
  iconName: React.ComponentProps<typeof MaterialIcons>['name'];
  value?: string;
  onClear: () => void;
}

export function Input({ iconName, value, onClear, ...rest }: Props) {
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
      <Clear onPress={onClear}>
        <Feather name="x" size={16} color="#E83F5B" />
      </Clear>
    </Container>
  );
}
