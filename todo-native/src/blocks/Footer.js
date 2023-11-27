import { View, Image, StyleSheet } from "react-native";

import { Logo } from '../../src/image/icon.png';


export function Footer(props) {
    return (
        <View style={styles.block}>
            <View>
                <Image style={styles.image} source={require('../../src/image/icon.png')}></Image>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: '#7f7679',
        width: '100%',
        height: 40,
        flexDirection: 'row',

    },
    image: {
        height: '100%',
        width: 60,
        resizeMode: 'stretch',
        backgroundColor: '#fff'
    }
})