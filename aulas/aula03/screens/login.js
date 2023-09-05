import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

const Login = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput style={estilos.input} placeholder="Email" keyboardType="email-address"/>
      <TextInput style={estilos.input} placeholder="Senha" secureTextEntry={true} />
      <Button color="gray" title="Entrar" />
  </View>
  
  );
};

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  
  },
  titulo: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: "center",
    marginBottom: 24,
    color: "black"

  },
  input: {
    color:"Black",
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  
  }
});

export default Login;