import { View, Text, StyleSheet } from "react-native"

export function Todo(props) {
    return <View key={props.index} style={styles.container}>
        <Text>{props.text}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderBottomColor: '#00c0FF',
        borderStyle: 'solid',
        borderBottomWidth: 2
    }
})