import React, { useState } from 'react';
import { Alert, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import scissorsImg from '../../assets/scissors.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import api from '../../services/api';
import {
  Container,
  Header,
  Image,
  Title,
  Subtitle,
  Forms,
  FormTitle,
  ResultContent,
  URL,
} from './styles';

export function Home() {
  const [myurl, setUrl] = useState('');
  const [name, setName] = useState('');

  async function handleShortenURL() {
    if (myurl.includes('https://') || myurl.includes('http://')) {
      const response = await api.get(`/api.php?key=b0a4399c0587a0a054f9d593c5079688a8fbc&short=${myurl}&name=${name}`);
      console.log(response.data);
      const { url } = response.data;
      console.log(url);
      if (url.status === 2) {
        Alert.alert('Opa,', 'Insira um link válido!');
      }
      if (url.status === 3) {
        Alert.alert('Opa,', 'Esse nome já existe!');
      }
      if (url.status === 4) {
        Alert.alert('Opa,', 'A chave da API é inválida!');
      }
      if (url.status === 5) {
        Alert.alert('Opa,', 'Substitua os caractéres inválidos da URL!');
      }
      if (url.status === 6) {
        Alert.alert('Opa,', 'A URL informada corresponde a um domínio bloqueado!');
      }
    } else {
      return Alert.alert('Erro', 'Sua URL precisa conter "https://" ou "http://"');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <Container>
        <StatusBar barStyle='light-content' translucent backgroundColor="transparent" />
        <Header>
          <Image source={scissorsImg} resizeMode='contain' />
          <Title>Less
            <Subtitle>URL</Subtitle>
          </Title>
        </Header>
        <Forms>
          <FormTitle>URL para encurtar</FormTitle>
          <Input
            iconName='content-cut'
            onChangeText={setUrl}
            value={myurl}
            placeholder="Digite a URL desejada..."
          />
          <FormTitle>Nome personalizado</FormTitle>
          <Input
            iconName='drive-file-rename-outline'
            onChangeText={setName}
            value={name}
            placeholder="Digite o nome para personalizar a URL..."
          />
          <Button
            onPress={handleShortenURL}
          />
          <ResultContent>
            <URL> URL encurtado </URL>
          </ResultContent>
        </Forms>
      </Container>
    </TouchableWithoutFeedback>
  );
}
