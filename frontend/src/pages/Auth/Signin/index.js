import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-web";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: '80%', marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ width: '80%', marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      />
      <Button title="Login" onPress={() => {}} />   
    </View>
  );
}


const styles = StyleSheet.create({
 
})

export { SignIn }
