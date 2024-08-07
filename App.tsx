import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevState) => prevState + 1)
  }

  const decrement = () => {
    setCount((prevState) => prevState - 1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>
      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrement}></Button>
        <Button title='ADICIONAR' onPress={increment}></Button>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enter:{
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450D6',
    width:'80%',
    color:'white'  
  },
  big:{
    fontSize:40
  },
  inline:{
    width: "50%",
    flexDirection:'row',
    justifyContent: 'center'
  }
});
