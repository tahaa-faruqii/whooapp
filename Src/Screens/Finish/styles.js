import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default styles

const styles = StyleSheet.create({
    Image_Container: {
        // flex: 1,
        marginTop: '-1%',
        // backgroundColor: '#000',
        borderWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 20,
        margin: 10,
        height: '60%',
        marginBottom: '3%'
    },
    mainImage: {
        padding: 10,
        width: '97%',
        height: '98%',
        margin: 5,
        borderRadius: 20,

    },
    bottomContainer: {
        bottom: 15,
        borderWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 20,
        margin: 10,
        height: '31%'
        // backgroundColor: '#000'
    },
    whitlist_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        margin: 2,
        marginLeft: '2%'
    },
    textbottom: {
        marginLeft: '5%',
        fontSize: 14,
        color: '#000',
        fontWeight: '700'
    },
    checkboxContainer: {
        marginLeft: '2%'
    },
    checkbox: {
        alignSelf: 'center',
    },


})