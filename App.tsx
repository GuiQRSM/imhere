import { Text, View, StyleSheet} from 'react-native';
import { Fragment } from 'react';

export default function App() {
  return (
    <View style={{
      
    }}>

    <Text style={{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    }}>
      Nome do evento
    </Text>

    <Text style={{
      color: '#6B6B6B',
      fontSize: 16,
    }}>
      Sexta, 8 de março de 2024.
    </Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
  }
});