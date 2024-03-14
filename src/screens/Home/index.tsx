import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participant = ['Name1', 'Name2', 'Name3', 'Name4','Name5','Name6', 'Name7', 'Name8', 'Name9', 'Name10' ]

  function handleParticipantAdd() {
    if(participant.includes) {

    }
    console.log("Clicado!");
  }

  function handleParticipantRemover(name: string) {
    console.log(`Clicou em remover ${name}`);
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
     />

     <TouchableOpacity style={styles.buttton}
      onPress={handleParticipantAdd}>

      <Text style={styles.buttonText}>
       +
      </Text>
     </TouchableOpacity>
    </View>

<ScrollView showsVerticalScrollIndicator={false}>
{
  participant.map(participant => (
    <Participant 
      key={participant}
      name={participant}
      onRemove={() => handleParticipantRemover("Menber1")}
    />
  ))
}
</ScrollView>

    </View>
  )
}
