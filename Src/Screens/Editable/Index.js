import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ReusableHeader from '../../Components/ReusableHeader'
import styles from './styles'

const Editable = ({ navigation }) => {
    const [isTextVisible, setIsTextVisible] = useState()
    const [text, setText] = useState()
    const handleButtonClick = () => {
        setIsTextVisible(!isTextVisible);
    };
    return (
        <View style={{ flex: 1 }}>
            <ReusableHeader
                leftIcon="left"
                onLeftPress={() => navigation.goBack()}
                centerIcon1="return-up-back-outline"
                centerIcon2="return-up-forward-outline"
                onCenterPress1={() => console.log('Center button pressed')}
                onCenterPress={() => console.log('Center button pressed')}
                rightIcon="arrowright"
                onRightPress={() => navigation.navigate('TextEdit')}
            />
            <View style={styles.Image_Container}>
                <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage} />
                {isTextVisible &&
                    <TextInput style={styles.imagetext}
                        placeholder='Write Something'
                        placeholderTextColor={'#00fbed'}
                        value={text}
                        onChangeText={setText}
                    />}
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around', }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TextEdit')}>
                    <Text style={styles.buttontext}>Colors</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                    <Text style={styles.buttontext}>Text</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Editable

