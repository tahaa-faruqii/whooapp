import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        width: '95%',
        // paddingHorizontal: '2%',
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: 'black',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#cdf886',
        height: 40,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        width: '50%',
        justifyContent: 'center',
        // right: 2
    },
    inActiveButton: {
        marginLeft: "10%"
    },
    inActiveButtonfollowing: {
        marginRight: "8%"
    },
    btnText: {
        alignSelf: 'center',
        textAlign: "center",
        color: '#000',
        fontWeight: "bold",
        fontSize: 18
    },
    inActiveBtnText: {
        alignSelf: 'center',
        textAlign: "center",
        color: '#000',
        fontWeight: "bold",
        fontSize: 18
    },
    flat_container: {
        width: '47%',
        // height: '70%',
        margin: 5,
        borderWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 20,
    },
    mainImage: {
        width: '95%',
        height: 180,
        margin: 5,
        borderRadius: 20,

    },
    rowContainer: {
        flexDirection: 'row',
        margin: 5,
        // marginRight: 10,
        alignItems: 'center',
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    nameText: {
        alignSelf: 'center',
        margin: 10,
        fontWeight: "bold",
        color: '#000'
    },
    iconContainer: {
        position: 'absolute',
        right: 1,
        marginTop: '4%',
    },
    descriptionText: {
        marginLeft: 10,
        // fontWeight: "bold",
        // color: '#000'
        fontSize: 12
    },
    hashtagText: {
        marginLeft: 10,
        marginBottom: 5,
        // position: 'absolute',
        right: 5,
        // fontWeight: "bold",
        color: '#17b2ce',
        fontSize: 12

    },


})
