// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// const Card = props => {
//     return (
//         <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
//     );
// };
// const styles = StyleSheet.create({
//     card: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 6,
//         shadowOpacity: 0.26,
//         elevation: 8,
//         backgroundColor: 'white',
//         padding: 20,
//         borderRadius: 10
//     }
// });
// export default Card;



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stories = () => {
    return (
        <View style={{ flex: 1 }}>
            <Card
                width={300}
                content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!'}
                source={{ uri: 'https://placeimg.com/640/480/tech' }}
                title={'Hello World!'}
                imageWidth={100}
                imageHeight={100}
                onPress={() => console.log("CardViewWithImage Clicked!")}
                roundedImage={true}
                roundedImageValue={50}
                imageMargin={{ top: 10 }}
            />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({})