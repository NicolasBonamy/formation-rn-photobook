/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ErrorBoundary from './src/ErrorBoundaries';
import Home from './src/routes/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './src/routes/Login';
import {ThemeProvider} from 'react-native-elements';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={[styles.safeAreaView, backgroundStyle]}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ErrorBoundary>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
              </Stack.Navigator>
            </NavigationContainer>
          </ErrorBoundary>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
