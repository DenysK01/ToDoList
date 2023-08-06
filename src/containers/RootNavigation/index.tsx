import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from '~containers/Authentication';
import Home from '~containers/Home';
import {useAppSelector} from '~store/hooks';
import {getIsAuthenticated} from '~store/modules/auth/selectors';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  // user's current authentication status
  const isAuthenticated = useAppSelector(getIsAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {
          /* After users login they will be redirected to the Home screen */
          isAuthenticated ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <Stack.Screen name="Authentication" component={Authentication} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
