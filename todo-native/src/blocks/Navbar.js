import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
    return (
        <View style = {style.navbar}>
            <Text style = {style.text}>
                {props.title}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 5
    },
    text: {
        color: '#fff',
        fontSize: 30,
        
    }
})