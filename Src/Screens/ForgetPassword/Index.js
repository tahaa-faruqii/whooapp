import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomText from '../../Components/CustomText'
import CustomTextInput from '../../Components/Textinput'
import CustomButton from '../../Components/CustomButton'

const ForgetPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ height: '50%', backgroundColor: '#eaff87', borderBottomWidth: 1 }}>
                <View style={styles.View_image}>
                    <Image source={require('../../Assets/images/Maskgroup.png')} style={styles.image} />
                    <CustomText variant={'heading'} children={'Forget \nPassword'} style={{ fontSize: 40 }} />
                </View>
            </View>
            <View style={{ marginTop: '10%', alignItems: 'center' }}>
                <CustomText children={'Enter your email we will send you a reset link .'} style={{ fontSize: 18, marginTop: '5%' }} />
            </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center', width: '90%', marginTop: '5%' }}>
                <CustomTextInput placeholder={'Email'} />
            </View>
            <View style={{ alignItems: 'center', marginTop: '20%', }}>
                <CustomButton label={'Send'} fontWeight={'bold'} style={{ width: '100%' }} onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgimage: {
        // flex: 1,
        height: 300,
        // backgroundColor: 'blue'
    },
    View_image: {
        marginTop: '20%',
        // position: 'absolute',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150, // Adjust the width as needed
        height: 150, // Adjust the height as needed
        // margin: 5, // Add margin between the images
    },
})