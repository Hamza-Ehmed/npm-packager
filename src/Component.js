import { StyleSheet, Text, View } from "react-native";

export default function Wrapper({ children }) {

    return (
        <View>
            <Text style={screenStyles.font} >
                Welcome
            </Text>
            {children}
        </View>
    )
}

const screenStyles = StyleSheet.create({
    font: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Poppins",
        fontSize: 22,
        fontWeight: "400px",
        lineHeight: 15,
        marginBottom: 15,
        color: "#222"
    }
});
