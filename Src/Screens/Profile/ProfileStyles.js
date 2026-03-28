import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        margin: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        margin: 10
    },
    buttonsContainer: {
        marginTop: 10,
    },
    userContainer: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: '13%',
        borderWidth: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: '95%'
    },
    imageContainer: {
        borderRadius: 50, // Assuming you want a circular image
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // Adjust as needed
        // marginTop: 10,
    },
    info: {
        fontSize: 16,
        // color: '#000',
        // fontWeight: 'bold'
    },
    infotext: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%', // Adjust as needed
        marginTop: 10,

    },
    button: {
        top: 5,
        backgroundColor: '#cdf886',
        height: 40,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center'
    },
    btnText: {
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

});
export default styles