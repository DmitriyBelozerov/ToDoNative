import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export function Todo(props) {

    const handleLongPress = () => {
        props.onRemove(props.item.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=>console.log(`press ${props.item.id}`)}
        onLongPress={handleLongPress}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderBottomColor: '#00c0FF',
        borderStyle: 'solid',
        borderBottomWidth: 2
    },
    text: {
        fontSize: 30
    }
})