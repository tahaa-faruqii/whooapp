import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import ReusableHeader from '../../Components/ReusableHeader'
import Icon from 'react-native-vector-icons/Feather'

const TextEdit = ({ navigation, route }) => {


    const handleButtonClick = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <ReusableHeader
                leftIcon="left"
                onLeftPress={() => navigation.goBack('')}
                centerIcon1="return-up-back"
                centerIcon2="return-up-forward"
                onCenterPress1={() => console.log('Center button pressed')}
                onCenterPress={() => console.log('Center button pressed')}
                rightIcon="arrowright"
                onRightPress={() => navigation.navigate('Finish')}
            />
            <View style={styles.Image_Container}>
                <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage}
                />


            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', }}>
                <TouchableOpacity style={styles.button}>
                    <Icon name='align-left' size={22} style={[styles.buttontext, { marginTop: 5 }]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext} >Aa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <View style={styles.innerCircle}>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TextEdit

const styles = StyleSheet.create({
    Image_Container: {
        // flex: 1,
        marginTop: '-1%',
        // backgroundColor: '#000',
        borderWidth: 2,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 20,
        margin: 10,
        height: '82%',
        marginBottom: '3%'
    },
    textContainer: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 8,
    },
    imagetext: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '50%',
        fontSize: 16,
        color: '#000'

    },
    mainImage: {
        padding: 10,
        width: '97%',
        height: '98%',
        margin: 5,
        borderRadius: 20,

    },
    button: {
        padding: 5,
        borderWidth: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderRadius: 10,
        width: '15%',

    },
    buttontext: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    outerCircle: {
        width: 80, // Adjust the size of the outer circle
        height: 80, // Adjust the size of the outer circle
        borderRadius: 40, // Half of the width/height to make it a circle
        borderColor: 'blue', // Border color
        borderWidth: 2, // Border width
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 30, // Adjust the size of the inner circle (button content)
        height: 30, // Adjust the size of the inner circle (button content)
        borderRadius: 30, // Half of the width/height to make it a circle
        backgroundColor: 'blue', // Background color
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
})