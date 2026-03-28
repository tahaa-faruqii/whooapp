import { Image, ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import CustomText from '../../Components/CustomText'
import CustomTextInput from '../../Components/Textinput'
import CustomButton from '../../Components/CustomButton'

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ height: '50%', backgroundColor: '#eaff87', borderBottomWidth: 1, }}>
        {/* <ImageBackground source={require('../../Assets/images/Frame.png')} style={styles.bgimage}> */}
        <View style={styles.View_image}>
          <Image source={require('../../Assets/images/Maskgroup.png')} style={styles.image} />
          <Image source={require('../../Assets/images/Login.png')} style={styles.image_log} />
        </View>
      </View>
      {/* </ImageBackground> */}
      <View style={{ margin: 10, marginTop: '20%' }}>
        <CustomTextInput placeholder={'Email'} style={styles.input} />
        <CustomTextInput placeholder={'Password'} icon={'eye'} />
        <CustomText children={'Forget Password?'} variant={'simple'} color={'#000'} style={[styles.forgotText, { fontWeight: 'bold' }]}
          fontWeight={'bold'} onPress={() => navigation.navigate('ForgetPassword')} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <CustomButton label={'Sign In'} color={'#000'} fontWeight={'bold'} backgroundColor={'#cdf886'} onPress={() => navigation.navigate('BottomNav')} />
      </View>
      <View style={{ alignSelf: 'center', justifyContent: 'flex-end', position: "absolute", bottom: '-3%' }}>
        <Text style={{ color: '#000' }}>
          Don’t have an account?
          <CustomText children={'Signup'} color={'#000'} style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('SignIn')} />
        </Text>
      </View>
    </KeyboardAvoidingView >
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  bgimage: {
    flex: 1,
    height: 300,
    // backgroundColor: 'blue'
  },
  View_image: {
    marginTop: '20%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    // margin: 5, // Add margin between the images
  },
  image_log: {
    alignSelf: 'center',
    width: 150, // Adjust the width as needed
    height: 65, // Adjust the height as needed
  },
  input: {
    marginBottom: 15, // Margin between text inputs
  },
  forgotText: {
    textAlign: 'right', // Align text to the right
    marginRight: 5, // Margin on the right side
    paddingTop: 10
  },
})