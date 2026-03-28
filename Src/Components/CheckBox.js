
// // CustomCheckBox.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// // import { Ionicons } from 'react-native-vector-icons';
// const CustomCheckBox = ({ label, onToggle, backgroundColor }) => {
//     const [checked, setChecked] = useState(false);

//     // const handleToggle = () => {
//     //     const newCheckedState = !checked;
//     //     setChecked(newCheckedState);
//     //     // Call the onToggle callback if provided
//     //     if (onToggle) {
//     //         onToggle(newCheckedState);
//     //     }
//     // };
//     const handleToggle = () => {
//         setChecked(!checked);
//         if (onToggle) {
//             onToggle(label);
//         }
//     };
//     return (
//         <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
//             <View style={styles.button}>
//                 <View style={[styles.checkbox, { backgroundColor: checked ? '#cdf886' : 'white' }]}>
//                     {/* {checked && <Ionicons name="checkmark" size={24} color="white" />} */}
//                     {/* <View style={[styles.checkbox, { backgroundColor: backgroundColor }]}> */}

//                 </View>
//             </View>
//             <Text style={styles.label}>{label}</Text>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     checkboxContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 2,
//     },
//     button: {
//         padding: 2,
//         borderWidth: 1,
//         borderRightWidth: 3,
//         borderBottomWidth: 3,
//         borderRadius: 5,
//         alignItems: 'center', // Center the checkbox horizontally
//         justifyContent: 'center', // Center the checkbox vertically
//     },
//     checkbox: {
//         width: 24,
//         height: 24,
//         borderRadius: 12, // Half of the width/height to make it a circle
//         borderWidth: 2,
//         borderColor: '#000',
//         // backgroundColor: 'blue',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     label: {
//         fontSize: 16,
//         marginLeft: 5,
//         color: '#000'
//     },
// });
// export default CustomCheckBox;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
const CheckboxWithText = ({ label, presslabel, onPress }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    // const handleToggle = () => {
    //     const newCheckedState = !isChecked;
    //     setIsChecked(newCheckedState);
    //     // Call the onToggle callback if provided
    //     if (onToggle) {
    //         onToggle(newCheckedState);
    //     }
    // };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkboxContainer}>
                <View style={[styles.checkbox, isChecked && styles.checked]} >
                    {/* {isChecked && <Ionicons name="checkmark" size={24} color="white" />} */}
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{label}<Text>{presslabel}</Text></Text>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkboxContainer: {
        marginRight: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
    },
    checked: {
        backgroundColor: 'green', // Change the color when checked
    },
    text: {
        fontSize: 14,
        // Add more styles as needed
    },
});

export default CheckboxWithText;
