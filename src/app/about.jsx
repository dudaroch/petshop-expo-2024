import { router } from "expo-router";
import { Text, View, Button } from "react-native";

export default function About() {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Sobre</Text>
            <Button title="Voltar" onPress={() => {router.replace("/")}} />
        </View>
    )
}