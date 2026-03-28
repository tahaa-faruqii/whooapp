import React, { useState, useRef, } from 'react';
import { View, Text } from 'react-native';
// import { useGestureHandler } from 'react-native-gesture-handler';

const useDraggableText = () => {
    const panGestureHandler = useGestureHandler();
    const translation = useRef(new Animated.ValueXY()).current;

    const onGestureEvent = Animated.event([
        { nativeEvent: translation },
    ]);

    return {
        panGestureHandler,
        translation,
        onGestureEvent,
    };
};
export default useDraggableText