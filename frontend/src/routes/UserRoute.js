import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';

export function UserRouter() {
    const Stack = createStackNavigator();

 return (
  <Stack.Navigator initialRouteName="Home">
   <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
 );
}