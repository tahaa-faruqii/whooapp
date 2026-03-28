import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LabelHeader from '../../Components/LabelHeader'
import CustomTextInput from '../../Components/Textinput'
import CustomButton from '../../Components/CustomButton'

const EditProfile = ({ navigation }) => {
    return (
        <View>
            <LabelHeader
                leftIcon="left"
                onPress={() => navigation.goBack('')}
                label={'Edit Profile'} />
            <View style={styles.imageContainer}>
                <Image source={require('../../Assets/images/pic.png')} style={styles.image} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: '5%' }}>
                <CustomTextInput style={{ width: '48%' }} placeholder={'First name'} />
                <CustomTextInput style={{ width: '48%' }} placeholder={'Last name'} />
            </View>
            <View style={{ margin: 10 }}>
                <CustomTextInput placeholder={'Username'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 5, marginTop: '2%' }}>
                <CustomTextInput style={{ width: '20%' }} placeholder={'MM'} />
                <CustomTextInput style={{ width: '20%' }} placeholder={'DD'} />
                <CustomTextInput style={{ width: '50%' }} placeholder={'YYYY'} />
            </View>
            <View style={{ margin: 10, marginTop: '2%' }}>
                <CustomTextInput style={{ marginTop: '2%' }} placeholder={'Current password'} />
                <CustomTextInput style={{ marginTop: '2%' }} placeholder={'New password'} />
                <CustomTextInput style={{ marginTop: '2%' }} placeholder={'Confirm password'} />
            </View>
            <View style={{ marginTop: '10%', alignItems: 'center' }}>
                <CustomButton label={'Done'}
                    color={'#000'} />

            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})