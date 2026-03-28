import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

const ReusableHeader = ({ leftIcon, onLeftPress, centerIcon1, centerIcon2, onCenterPress1, onCenterPress, rightIcon, onRightPress, label }) => {
    return (
        <View style={styles.header}>
            {/* Left Icon/Button */}

            <TouchableOpacity style={[styles.button, styles.buttonstyle]} onPress={onLeftPress}>
                <AntIcon name={leftIcon} size={24} color={'#000'} />
            </TouchableOpacity>

            {/* Center Icons/Buttons */}
            {centerIcon1 && centerIcon2 && (

                <View style={styles.centerContainer}>
                    <TouchableOpacity style={[styles.centerButton, styles.buttonstyle]} onPress={onCenterPress1}>
                        <Icon name={centerIcon1} size={24} color={'#000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.centerButton, styles.buttonstyle]} onPress={onCenterPress}>
                        <Icon name={centerIcon2} size={24} color={'#000'} />
                    </TouchableOpacity>

                </View>
            )}

            {/* Right Icon/Button */}
            {rightIcon && (
                <TouchableOpacity style={[styles.button, styles.buttonstyle]} onPress={onRightPress}>
                    <AntIcon name={rightIcon} size={24} color={'#000'} />
                </TouchableOpacity>
            )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: '#f0f0f0',
    },
    button: {
        // marginRight: 15,
    },
    centerContainer: {
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: 'auto'

    },
    centerButton: {
        marginHorizontal: 5,
    },
    buttonstyle: {
        padding: 3,
        borderWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderRadius: 10,
    },
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: '20%'
    }
});

export default ReusableHeader;


