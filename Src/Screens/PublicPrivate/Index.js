import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const data = [
    { id: 1, name: "Item 1", imagesource: require('../../Assets/images/pic.png') },
    { id: 2, name: "Item 2", imagesource: require('../../Assets/images/pic.png') },
    { id: 3, name: "Item 3", imagesource: require('../../Assets/images/pic.png') },
    { id: 4, name: "Item 4", imagesource: require('../../Assets/images/pic.png') },
    { id: 5, name: "Item 5", imagesource: require('../../Assets/images/pic.png') },
    { id: 6, name: "Item 6", imagesource: require('../../Assets/images/pic.png') },
    { id: 7, name: "Item 7", imagesource: require('../../Assets/images/pic.png') },
];
const PublicPrivate = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState('Public')

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view_container}>
                <View style={{ alignItems: 'center', marginTop: '2%', }}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={activeTab === 'Public' ? styles.button : styles.inActiveButton}
                            onPress={() => setActiveTab('Public')}
                        >
                            <Text style={activeTab === 'Public' ? styles.btnText : styles.inActiveBtnText}>Public</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={activeTab === 'Private' ? styles.button : styles.inActiveButton}
                            onPress={() => setActiveTab('Private')}
                        >
                            <Text style={activeTab === 'Private' ? styles.btnText : styles.inActiveBtnText}>Private</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {activeTab === 'Public' ? <Public /> : <Private />}

            </View>
        </View>


    )
}



const Private = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <View style={styles.flat_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Image source={item.imagesource} style={styles.mainImage} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2} />
        </View>
    )
};
const Public = () => {
    const renderItem = ({ item }) => (
        <View style={styles.flat_container}>
            <TouchableOpacity>
                <Image source={item.imagesource} style={styles.mainImage} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <Text>Index</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2} />
        </View>
    )
}



export default PublicPrivate

