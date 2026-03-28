import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LabelHeader from '../../Components/LabelHeader'
import CustomText from '../../Components/CustomText'
import CustomButton from '../../Components/CustomButton'

const DeleteAccount = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <LabelHeader
                leftIcon="left"
                onPress={() => navigation.goBack('')}
                label={'Delete Account'}
            />
            <View style={styles.imageContainer}>
                <Image source={require('../../Assets/images/Maskgroup.png')} style={styles.image} />
                <CustomText children={'Delete your\nwillio account'} variant={'heading'} />
                <View style={{ margin: 10 }}>
                    <CustomText
                        children={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."}
                        variant={'simple'} />
                    <CustomText
                        children={"If you're ready to leave forever, we'll send an email with the final step to:"}
                        variant={'simple'} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: '5%' }}>
                    <CustomText children={'Tahaa.faruqii@gmail.com'} variant={'heading'} />
                </View>
            </View >
            <View style={{ justifyContent: 'center', alignItems: "center", bottom: 'auto' }}>
                <CustomButton label={'Send account deletion email'} color={'#000'} onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}

export default DeleteAccount

const styles = StyleSheet.create({
    imageContainer: {
        // justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '60%',
        height: '40%'
    },
    Text: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 13,
    },
})