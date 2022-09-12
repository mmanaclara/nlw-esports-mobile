import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You are going to London next year (2023)! ✈
      </Text>

      <Button buttonText="Have faith!" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  buttonText: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonText}>
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003192',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    padding: 30,
  },
  buttonText: {
    backgroundColor: '#F52933',
    color: '#fff',
    padding: 15,
  }
});
