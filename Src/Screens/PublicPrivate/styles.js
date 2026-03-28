import { StyleSheet } from "react-native"




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_container: {
        borderWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 20,
        margin: 10

    },
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
    mainImage: {

        width: '95%',
        height: 180,
        margin: 5,
        borderRadius: 20,

    },
    flatListContainer: {
        justifyContent: 'space-between',
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
})

export default styles