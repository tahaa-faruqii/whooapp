
const data = [
    { id: 1, name: "Item 1", imagesource: require('../../Assets/images/pic.png') },
    { id: 2, name: "Item 2", imagesource: require('../../Assets/images/pic.png') },
    { id: 3, name: "Item 3", imagesource: require('../../Assets/images/pic.png') },
    { id: 4, name: "Item 4", imagesource: require('../../Assets/images/pic.png') },
    { id: 5, name: "Item 5", imagesource: require('../../Assets/images/pic.png') },
    { id: 6, name: "Item 6", imagesource: require('../../Assets/images/pic.png') },
    { id: 7, name: "Item 7", imagesource: require('../../Assets/images/pic.png') },
];



import React, { useState } from 'react';
import { View, Text, FlatList, Animated, TouchableOpacity, Image, ScrollView, Modal, Alert } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ENIcon from 'react-native-vector-icons/Entypo'
const ListView = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const imageUrl = 'https://example.com/your-image.jpg'
    const animation = new Animated.Value(2);
    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleSelect = (index) => {
        setSelectedItem(index);

        // Perform animation
        Animated.spring(animation, {
            toValue: 1.4, // Scale up to 1.2 times the original size
            useNativeDriver: true,
        }).start();
    };

    const renderItem = ({ item, index }) => {
        const scaleStyle = {
            transform: [{ scale: index === selectedItem ? animation : 1 }],
        };

        return (
            <TouchableOpacity onPress={() => handleSelect(index)}>
                <Animated.View style={[{ padding: 20, }, scaleStyle]}>
                    {/* <Text>{item.id}</Text> */}
                    <Image source={item.imagesource} style={{ width: 40, height: 40, borderRadius: 30, }} />
                </Animated.View>
            </TouchableOpacity>
        );
    };


    const handleSaveImage = async () => {
        try {
            const asset = await MediaLibrary.createAssetAsync(imageUrl);
            Alert.alert('Image Saved', 'Image saved successfully to the gallery.');
        } catch (error) {
            console.error('Error saving image:', error);
            Alert.alert('Error', 'Failed to save image.');
            setIsModalVisible(!isModalVisible)
        }
    };

    const handleShareLink = async () => {
        try {
            await Share.share({
                message: imageUrl,
            });
        } catch (error) {
            console.error('Error sharing link:', error);
            Alert.alert('Error', 'Failed to share link.');
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ padding: 2 }}>
                <FlatList style={{}}
                    data={data} // Your data array
                    renderItem={renderItem}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>


            <ScrollView style={{ bottom: 20, }}>
                <View style={styles.Image_Container}>
                    <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage} />
                    {/* <View style={styles.rowContainer}> */}
                    <View style={styles.rowContainer}>
                        <Image source={require('../../Assets/images/pic.png')} style={styles.thumbnail} />
                        <Text style={styles.nameText}>tahaa</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#93ec00' }}>Follow</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#feb5ff' }]}>
                                <Icon name={'heart'} size={26} color={'#ee05ad'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Editable')} style={[styles.button, { backgroundColor: '#eaff87' }]}>
                                <MCIcon name={'lead-pencil'} size={26} color={'#88a301'} />
                            </TouchableOpacity>
                            <View style={{}}>
                                <TouchableOpacity style={[styles.button, { marginBottom: 2 }]} onPress={handleOpenModal}>
                                    <ENIcon name={'dots-three-horizontal'} size={26} color={'#000'} />
                                </TouchableOpacity>
                                <Modal visible={isModalVisible} transparent animationType="slide" >
                                    <View style={styles.modalContainer}>
                                        <View style={styles.modalContent}>
                                            <TouchableOpacity onPress={handleSaveImage}>
                                                <Text>Save Image</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleShareLink}>
                                                <Text>Share Link</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.descriptionText}>
                            Lorem Ipsum is simply dummy text of the printing
                        </Text>
                        <Text style={styles.hashtagText}>#Lorem #Lorem #Lorem #Lorem</Text>
                    </View>
                </View>

            </ScrollView >

        </View >
    );
};

export default ListView;
