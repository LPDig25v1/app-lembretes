import { Image, StyleSheet, Platform, View, TextInput, Button } from 'react-native';
import { styles } from './StyleSheet';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';

export default function App() {
  const [lembrete, setLembrete] = useState('');

//captura o texto digitado
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  };
//para adicionar o que foi digitado
  const adicionarLembrete = () => {
    console.log (lembrete);
  };
  return (
    <View style={styles.telaPrincipalView}>
    <View style={styles.lembreteView}>
    {/* usuário irá inserir lembretes aqui*/}
    <TextInput placeholder="Lembrar..." style={styles.lembreteInputText} onChangeText={capturarLembrete} value={lembrete}/>
    <Button title="+" onPress={adicionarLembrete} />
    </View>
    <View>
    {/*Aqui será exibida a lista de lembretes*/}
    </View>
    </View>
  );
}