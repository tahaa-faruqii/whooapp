import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ReusableFlatList = ({ data, keyExtractor, numColumns, horizontal, contentContainerStyle, scrollEnabled, renderItem, showsVerticalScrollIndicator }) => {
    return (
        <FlatList
            contentContainerStyle={contentContainerStyle}
            horizontal={horizontal}
            numColumns={numColumns}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            scrollEnabled={scrollEnabled}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
});

export default ReusableFlatList;
