import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";

export default function App() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "super@email.com", password: "Super123!" });
      router.replace("/");
    } catch (error) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <Button title="SignIn Super" onPress={handleEntrarSuper} />

      <Button
        title="SignIn Adm"
        onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })}
      />

      <Button
        title="SignIn User"
        onPress={() =>
          signIn({ email: "user@email.com", password: "User123!" })
        }
      />

      <Button title="SignOut" onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "light",
    fontSize: 20,
  },
});
