import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import CustomText from '../../Components/CustomText'
import CustomTextInput from '../../Components/Textinput'
import CustomButton from '../../Components/CustomButton'

const SignIn = ({ navigation }) => {
    return (
        <KeyboardAvoidingView behavior='height'>
            <View style={{ height: '40%', backgroundColor: '#eaff87', borderBottomWidth: 1 }}>
                <View style={styles.View_image}>
                    <Image source={require('../../Assets/images/Maskgroup.png')} style={styles.image} />
                    <CustomText variant={'heading'} children={'Sign Up'} style={{ fontSize: 40 }} />
                </View>
            </View>
            <View style={{ margin: 20, marginTop: '10%' }}>
                {/* <View style={{ flexDirection: "row", width: '90%', justifyContent: 'space-between' }}> */}
                <View style={{ width: '100%', flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                    <CustomTextInput placeholder={'First Name'} style={{ width: '45%' }} />
                    <CustomTextInput placeholder={'Last Name'} style={{ width: '45%' }} />
                    {/* </View> */}
                </View>
                <CustomTextInput placeholder={'Email'} style={styles.input} />
                <CustomTextInput placeholder={'Password'} icon={'eye'} style={styles.input} />
                <CustomTextInput placeholder={'Confirm Password'} icon={'eye'} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%' }}>
                <CustomButton label={'Sign In'} color={'#000'} fontWeight={'bold'} backgroundColor={'#cdf886'} />
            </View>
            <View style={{ alignSelf: 'center', justifyContent: 'flex-end', marginbottom: 5, marginTop: 10 }}>
                <Text style={{ color: '#000' }}>
                    Already have an account?
                    <CustomText children={' Sign In'} color={'#000'} style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')} />
                </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignIn

const styles = StyleSheet.create({
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
    input: {
        marginBottom: 15, // Margin between text inputs
    },
})