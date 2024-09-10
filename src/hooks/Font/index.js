import { useFonts } from "expo-font";
import { createContext } from "react";
import { ActivityIndicator, View, Text } from "react-native";

const FontContext = createContext();

export function FontProvider({children}) {

    const [loaded, error] = useFonts ({
        regular: require("../../assets/fonts/Nunito-Regular.ttf"),
        bold: require("../../assets/fonts/Nunito-Bold.ttf"),
        black: require("../../assets/fonts/Nunito-Black.ttf"),
        semibold: require("../../assets/fonts/Nunito-SemiBold.ttf"),
        light: require("../../assets/fonts/Nunito-Light.ttf"),        
    });

    if (!loaded && !error) {
        return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontSize: 28, marginTop: 15, }}> Carregando as Fontes </Text>
        <ActivityIndicator size="large" color="black" />
        </View>
        );
      }

    return <FontContext.Provider value={{loaded}}>
        {children}
    </FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}