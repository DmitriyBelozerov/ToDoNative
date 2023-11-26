import { View, StyleSheet, TextInput, Button } from "react-native"

export const AddTodo = (props) => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title='Add' />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 10
    },
    input: {
        borderColor: '#3949ab',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '80%',
        
    }

})