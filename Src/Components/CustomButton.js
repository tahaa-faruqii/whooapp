import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import { Color } from '../Assets/theme'
// import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({ label, onPress, style, fontWeight, color, borderColor, backgroundColor, }) => {
    return (
        <TouchableOpacity style={[styles.button, { borderColor: borderColor, style: style }]} onPress={onPress}>
            <Text style={{ color: color, fontWeight: fontWeight, fontSize: 18, }}>{label}</Text>

        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    // button: {
    //     height: 50,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#cdf886',
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     width: '95%',
    //     padding: 5,
    //     borderBottomWidth: 4,
    //     borderRightWidth: 4,
    //     borderColor: 'black',
    //     // margin: 5

    // }
    button: {
        height: 50,
        margin: 10,
        // borderWidth: 0.5,
        borderRadius: 30,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#30B04E',
        // borderColor: '#30B04E'
    }
})