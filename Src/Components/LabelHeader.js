import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const LabelHeader = ({ label, onPress, leftIcon }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.leftButton} onPress={onPress}>
                <AntIcon name={leftIcon} size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.centerContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            {/* You can add a right button here if needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center', // Aligns the label horizontally in the center
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    leftButton: {
        padding: 3,
        borderWidth: 1,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderRadius: 10,
    },
});

export default LabelHeader;
