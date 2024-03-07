import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log("Clicado!");
  }
 
  return (
    <View style={styles.container}>

    <Text style={styles.eventName}>
      Nome do evento
    </Text>

    <Text style={styles.eventDate}>
      Sexta, 8 de março de 2024.
    </Text>
    
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
  )
}
