import React, { useState } from 'react';
import { Alert, Keyboard, StatusBar, ToastAndroid, TouchableWithoutFeedback } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

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
  const [cuttedUrl, setCuttedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleClearInput() {
    setUrl('');
    setName('');
  }

  async function handleShortenURL() {
    setIsLoading(true);
    if (myurl.includes('https://') || myurl.includes('http://')) {
      const response = await api.get(`/api.php?key=b0a4399c0587a0a054f9d593c5079688a8fbc&short=${myurl}&name=${name}`);
      console.log(response.data);
      const { url } = response.data;
      switch (url.status) {
        case 2:
          Alert.alert('Opa,', 'Insira um link válido!');
          break;
        case 3:
          Alert.alert('Opa,', 'Esse nome já existe!');
          break;
        case 4:
          Alert.alert('Opa,', 'A chave da API é inválida!');
          break;
        case 5:
          Alert.alert('Opa,', 'Substitua os caractéres inválidos da URL!');
          break;
        case 6:
          Alert.alert('Opa,', 'A URL informada corresponde a um domínio bloqueado!');
          break;
        case 7:
          ToastAndroid.show('URL encurtada com sucesso!', ToastAndroid.LONG);
          setCuttedUrl(response.data.url.shortLink);
          setUrl('');
          setName('');
          Keyboard.dismiss();
          break;
        default:
      }
    } else {
      Alert.alert('Erro', 'Sua URL precisa conter "https://" ou "http://"');
    }
    setIsLoading(false);
  }

  function copyUrl() {
    Clipboard.setString(cuttedUrl);
    return ToastAndroid.show('Copiado para área de transferência!', ToastAndroid.LONG);
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
            onClear={handleClearInput}
            placeholder="Digite a URL desejada..."
          />
          <FormTitle>Nome personalizado</FormTitle>
          <Input
            iconName='drive-file-rename-outline'
            onChangeText={setName}
            value={name}
            onClear={handleClearInput}
            placeholder="Digite o nome para personalizar a URL..."
          />
          <Button
            onPress={handleShortenURL}
            isLoading={isLoading}
          />
          <ResultContent onPress={cuttedUrl ? copyUrl : () => { }}>
            <URL> {cuttedUrl} </URL>
          </ResultContent>
        </Forms>
      </Container>
    </TouchableWithoutFeedback>
  );
}
