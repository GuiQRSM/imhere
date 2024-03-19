import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participant, setParticipant] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participant.includes(participantName)) {
      return Alert.alert("Participante já existe","Insira um novo paricipante na lista!")
    }

    setParticipant(prevState => [...prevState, participantName])
    setParticipantName('');
  }

  function handleParticipantRemover(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>

    <Text style={styles.eventName}>
      Nome do evento
    </Text>

    <Text style={styles.eventDate}>
      Sexta, 8 de março de 2024.
    </Text>
    
  <View style={styles.form}>
    <TextInput
     style={styles.input}
     placeholder='Nome do participante'
     placeholderTextColor="#6B6B6B"
     onChangeText={text => setParticipantName(text)}
     value={participantName}
     />

     <TouchableOpacity style={styles.buttton}
      onPress={handleParticipantAdd}>

      <Text style={styles.buttonText}>
       +
      </Text>
     </TouchableOpacity>
    </View>

 <FlatList 
     data={participant}
     keyExtractor={item => item}
     renderItem={({item}) => (
    <Participant 
      key={item}
      name={item}
      onRemove={() => handleParticipantRemover(item)}
    />
  )}
  showsVerticalScrollIndicator={false}
  ListEmptyComponent={() => (
    <Text style={styles.listyEmpty}>
      Ninguém chegou no invento ainda? Adicione participantes na lista.
    </Text>
  )}
/>

    </View>
  )
}




