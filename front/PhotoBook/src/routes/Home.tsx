import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Legal from './Legal';
import Settings from './Settings';
import Wall from './Wall';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Wall" component={Wall} />
      <Tab.Screen name="Legal" component={Legal} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     justifyContent: 'center',
//     padding: 10,
//   },
// });

export default Home;
