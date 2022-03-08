import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Home works!</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
});

export default Home;
