import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ variant, style, children, onPress, color }) => {
    // Determine the text style based on the variant prop
    const textStyle =
        variant === 'heading'
            ? styles.headingText
            : variant === 'simple'
                ? styles.simpleText
                : {}; // Default to an empty object for no specific style

    // Merge the provided styles with the text style
    const combinedStyles = [textStyle, style];
    // combinedStyles.push({ color: color });
    return <Text style={combinedStyles}
        onPress={onPress}>{children}</Text>;
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 26,
        fontWeight: 'bold',
        // Add any other heading-specific styles here
        color: '#000'
    },
    simpleText: {
        fontSize: 16,
        color: '#000'
        // Add any other simple text-specific styles here

    },
});

export default CustomText;
