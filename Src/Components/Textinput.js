


// // import React from 'react';
// // import { TextInput, StyleSheet } from 'react-native';

// // const CustomTextInput = ({ placeholder, value, onChangeText, style, secureTextEntry, placeholderTextColor, ...props }) => {
// //     return (
// //         <TextInput
// //             placeholder={placeholder}

// //             value={value}
// //             onChangeText={onChangeText}
// //             secureTextEntry={secureTextEntry}
// //             placeholderTextColor={placeholderTextColor}
// //             style={[styles.input, style]}
// //             {...props}
// //         />
// //     );
// // };

// // const styles = StyleSheet.create({
// //     input: {
// //         height: 40,
// //         // width: "80%",
// //         borderColor: 'gray',
// //         borderWidth: 1,
// //         paddingHorizontal: 10,
// //         marginBottom: 10,
// //         borderRadius: 10,
// //         color: 'gray',
// //         borderBottomWidth: 4,
// //         borderRightWidth: 4,
// //         borderColor: 'black',
// //     },
// // });

// // export default CustomTextInput;


// import React from 'react';
// import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import your desired icon library

// const CustomTextInput = ({ placeholder, value, onChangeText, style, secureTextEntry, placeholderTextColor, icon, onPress, ...props }) => {
//     return (
//         <View style={[styles.inputContainer, style]}>
//             <TextInput
//                 placeholder={placeholder}
//                 value={value}
//                 onChangeText={onChangeText}
//                 secureTextEntry={secureTextEntry}
//                 placeholderTextColor={placeholderTextColor}
//                 style={styles.input}
//                 {...props}
//             />
//             {icon &&
//                 <TouchableOpacity onPress={onPress}>
//                     <Icon name={icon} size={20} color="gray" style={styles.icon} />
//                 </TouchableOpacity>
//             }
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     inputContainer: {
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderRadius: 10,
//         paddingHorizontal: 10,
//         borderBottomWidth: 4,
//         borderRightWidth: 4,
//         borderColor: 'black',
//     },
//     input: {
//         flex: 1,
//         height: 40,
//         marginLeft: 5,
//     },
//     icon: {
//         marginRight: 5,
//     },
//     // input: {
//     //     flex: 1,
//     //     height: 40,
//     //     // width: "90%",
//     //     borderColor: 'gray',
//     //     borderWidth: 1,
//     //     paddingHorizontal: 10,
//     //     marginBottom: 10,
//     //     borderRadius: 10,
//     //     // color: 'gray',
//     //     borderBottomWidth: 4,
//     //     borderRightWidth: 4,
//     //     borderColor: 'black',
//     // },

// });

// export default CustomTextInput;



import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const LineTextInput = ({ value, onChangeText, placeholder, icon, onPress, secureTextEntry }) => {
    // const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            // Other TextInput props can be added here
            />
            {icon &&
                <TouchableOpacity onPress={onPress}>
                    <Icon name={icon} size={20} color="gray" style={styles.icon} />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        // Add more styles as needed
    },
    input: {
        height: 40,
        borderColor: 'gray',
        // borderWidth: 1,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        width: '100%'
        // Add more styles as needed
    },
    icon: {
        alignItems: 'flex-end',
        right: 20,
        marginTop: 'auto'
    },
});

export default LineTextInput;