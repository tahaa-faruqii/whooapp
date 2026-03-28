// import React from 'react';
// import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

// const Reuse_touchbutton = ({ label, onPress, textstyles, rightIcon, rightText, rtextstyles, margintop }) => {
//     return (
//         <TouchableOpacity style={[styles.buttonContainer, { top: margintop }]} onPress={onPress}>
//             <Text style={[styles.buttonText, textstyles]}>{label}</Text>
//             <View style={styles.iconContainer}>
//                 {rightText && <View style={{ backgroundColor: '#AF0909', borderRadius: 20, paddingHorizontal: '3%', paddingVertical: '8%' }}>
//                     <Text style={[styles.rightText,]}>{rightText}</Text>
//                 </View>}
//                 {rightIcon && <Icon name={rightIcon} size={20} color="black" />}
//                 {/* <Icon name="right" size={20} color="#000" /> */}
//             </View>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     buttonContainer: {
//         paddingTop: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         // backgroundColor: '#af0909',
//         borderRadius: 5,
//         paddingHorizontal: 20,
//         paddingVertical: 5,

//     },
//     buttonText: {
//         color: '#000',
//         fontSize: 16,
//     },
//     iconContainer: {
//         marginLeft: 5,
//     },
//     rightText: {
//         textAlign: 'center',
//         fontSize: 14,
//         color: '#fff',

//     },
// });

// export default Reuse_touchbutton;

import React from 'react';
import { TouchableOpacity, Text, View, Switch, StyleSheet } from 'react-native';

const SimpleButton = ({ label, onPress, showToggle, onToggle, onValueChange, value }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
            {showToggle && (
                <View style={styles.toggleContainer}>
                    <Switch
                        trackColor={{ false: '#B0A695', true: '#65B741' }}
                        thumbColor={'#000'}
                        ios_backgroundColor={'#cdf886'}
                        onValueChange={onValueChange}
                        value={value} // Set the initial value or use a state if needed
                    />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        height: 60,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    toggleContainer: {
        marginLeft: 10,

    },
});

export default SimpleButton;
