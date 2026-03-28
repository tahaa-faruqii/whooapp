import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import CustomTextInput from '../../Components/Textinput'
import CustomButton from '../../Components/CustomButton'

import CustomCheckBox from '../../Components/CheckBox'
import LabelHeader from '../../Components/LabelHeader'
// import styles from './styles'
const Finish = ({ navigation }) => {
    const [checked, setChecked] = useState([])
    const handleCheckBoxToggle = (checked) => {
        console.log('Checkbox is now:', checked);
        setChecked((prevSelectedLabel) =>
            prevSelectedLabel === checked ? null : checked
        );
    };
    // const handleCheckBoxToggle = (value) => {
    //     setChecked((prevCheckedValues) => {
    //         if (prevCheckedValues.includes(value)) {
    //             return prevCheckedValues.filter((v) => v !== value); // Remove from checked values
    //         } else {
    //             return [...prevCheckedValues, value]; // Add to checked values
    //         }
    //     });
    // };

    return (
        <View style={{ flex: 1 }}>
            <LabelHeader
                leftIcon="left"
                onPress={() => console.log('press it')}
                label={'My Profile'}
            />

            <View style={styles.Image_Container}>
                <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage}
                />
            </View>
            <ScrollView style={styles.bottomContainer}>

                {/* <View style={styles.bottomContainer}> */}
                <Text style={styles.whitlist_text}>Wishlist</Text>
                <View style={styles.checkboxContainer}>

                    <CustomCheckBox
                        label={'Public'}
                        checked={checked === 'Public'}
                        onToggle={() => handleCheckBoxToggle('Public')}
                    />

                    <CustomCheckBox
                        label={'Private'}
                        checked={checked === 'Private'}
                        onToggle={() => handleCheckBoxToggle('Private')}
                    />


                </View>
                <View style={{ margin: 10, bottom: 5 }}>
                    <CustomTextInput placeholder={'write say something'} />
                </View>
                <View style={{ margin: 10, width: '100%', bottom: 15 }}>
                    <CustomButton label={'Post'} color={'#000'} onPress={() => navigation.navigate('Profile')} />
                </View>
                {/* </View> */}
            </ScrollView>

        </View >
    )
}

export default Finish

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