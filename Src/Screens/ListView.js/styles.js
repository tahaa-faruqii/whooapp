import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export { styles }
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Image_Container: {
        flex: 1,
        borderWidth: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderRadius: 20,
        // margin: 10
        width: '95%',
        alignSelf: 'center',

    },

    mainImage: {
        padding: 5,
        width: 'auto',
        margin: 6,
        borderRadius: 20,


    },
    rowContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        margin: 5,
        // marginRight: 10,
        alignItems: 'center',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nameText: {
        alignSelf: 'center',
        margin: 10,
        fontWeight: "bold",
        color: '#000',
        fontSize: 22
    },
    iconContainer: {
        position: 'absolute',
        right: 5,
        top: 3,
        bottom: 'auto'
    },
    button: {
        borderWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        margin: 2,
        bottom: 20,
        padding: 1,
        borderRadius: 10,


    },
    descriptionText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        fontSize: 12,

    },
    hashtagText: {
        marginLeft: 10,
        marginBottom: 5,
        color: '#17b2ce',
        fontSize: 12

    },
    modalContainer: {
        flex: 1,
        height: '2%',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: ' 20%',
        marginBottom: '5%',
        borderRadius: 20
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderWidth: 2, // Border width
        borderColor: '#000', // Border color

    },
})