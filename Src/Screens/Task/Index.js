import { StyleSheet, Text, View, Image, Modal, Pressable, Button } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton'

import CheckboxWithText from '../../Components/CheckBox'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import LineTextInput from '../../Components/Textinput';
const Task = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);


    const handleLogin = async () => {
        try {
            setLoading(true);

            const response = await fetch('https://daykleanapi.dotserviz.com/public/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'hamzashan123@gmail.com',
                    password: 'admin',
                }),
            });

            if (!response.ok) {
                setResponseData(response);
                setModalVisible(true);
                throw new Error('Invalid credentials');
            }
            console.log('>>>>>>>>>>>', response)
            console.log('resdata', responseData);

        } catch (error) {
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    };
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('../../Assets/images/word-logo.png')} />
                <Text style={styles.title}>Sign in{'\n'}<Text style={styles.textjoin}><Text style={styles.text}>or</Text> join linked</Text></Text>
                <View style={styles.googleSignInButton}>
                    <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                    />
                </View>
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                    <Text style={styles.text}>or</Text>
                    <View style={styles.line} />
                </View>
                <LineTextInput placeholder={'Email or Phone'}
                    value={email}
                    onChangeText={(txt) => setEmail(txt)}

                    style={styles.input} />
                <LineTextInput placeholder={'Password'} style={styles.input}
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                    onpress={togglePasswordVisibility}
                    icon={'eye'}
                    secureTextEntry={isPasswordVisible} />
                <CustomButton label={'Continue'} style={styles.button} onPress={handleLogin} />
                <View style={styles.checkboxContainer}>
                    <CheckboxWithText label={'Remember me. '} presslabel={'Learn more'} />
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={{ flex: 1 }}>
                        <Text>Data in Modal:</Text>
                        {loading ? (
                            <Text>Loading...</Text>
                        ) : responseData ? (
                            < View >

                                <Text>{JSON.stringify(responseData.status)}</Text>
                            </View>
                        ) : (
                            <Text>No data available</Text>
                        )}

                        <Button title="Close Modal" onPress={closeModal} />
                    </View>
                </Modal>
            </View >
        </View >
    );
};
export default Task

// styles.js

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        resizeMode: 'contain',
        height: '20%',
        width: '50%',
        bottom: 20
    },
    title: {
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 32,
        color: '#000',
    },
    googleSignInButton: {
        alignItems: 'center',
    },
    dividerContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    line: {
        height: StyleSheet.hairlineWidth,
        width: '40%',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        color: '#000',

    },
    textjoin: {
        fontSize: 14,
        color: '#18b0c8',

    },
    input: {
        // Your input styles here
    },
    button: {
        // Your button styles here
    },
    checkboxContainer: {
        margin: '5%',
    },
});
