import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import Legal from './Legal';
import Settings from './Settings';
import Wall from './Wall';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let name = '';
          switch (route.name) {
            case 'Wall':
              name = 'newspaper';
              break;
            case 'Legal':
              name = 'balance-scale';
              break;
            case 'Settings':
              name = 'cog';
              break;
          }
          // let iconName;

          // if (route.name === 'Home') {
          //   iconName = focused
          //     ? 'ios-information-circle'
          //     : 'ios-information-circle-outline';
          // } else if (route.name === 'Settings') {
          //   iconName = focused ? 'ios-list-box' : 'ios-list';
          // }

          // You can return any component that you like here!
          //return <Ionicons name={iconName} size={size} color={color} />;
          return (
            <Icon
              type="font-awesome-5"
              name={name}
              color={color}
              tvParallaxProperties={undefined}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
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
