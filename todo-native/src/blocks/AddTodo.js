import React from "react"
import { View, StyleSheet, TextInput, Button, Alert } from "react-native"

export const AddTodo = (props) => {
    const [value, setValue] = React.useState('');

    function changeHandler(text) {
        setValue(text)
    }

    function pressHandler() {
        if (value.trim()) {
            props.onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Заполни дело')
        }
    }


    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={changeHandler}
                value={value}
                placeholder="Введите дело"
                autoCorrect={false} // T9
                autoCapitalize="none" //первая буква заглавная
            />
            <Button title='Add' onPress={pressHandler} />
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