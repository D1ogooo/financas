import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../pages/Auth/Signin";
import { SignUp } from "../pages/Auth/Signup";


export function AuthRouter() {
    const Stack = createStackNavigator();

  return (

  <Stack.Navigator initialRouteName="signin">
   <Stack.Screen name="signin" component={SignIn} />
   <Stack.Screen name="register" component={SignUp} />
  </Stack.Navigator>
  );
}
