import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Reuse_Header from '../../component/Reuse_Header/Reuse_Header'
import styles from './styles';
import CustomButton from '../../Components/CustomButton';
// import CustomButton from '../../component/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        driver: 'Arslan Ali',
    },
    // Add more items as needed
    {
        driver: 'Arslan Ali',
    },
    {
        driver: 'Arslan Ali',
    },
    // Add more items as needed
    {

        driver: 'Arslan Ali',

    },
    {
        driver: 'Arslan Ali',
    },
];

export default function Home() {
    const handleLeftPress = () => {
        // Handle left button press
    };
    const [activeTab, setActiveTab] = useState('ForYou')
    return (
        <View style={{ flex: 1 }}>
            <View>

                <View style={{ alignItems: 'center', marginTop: '2%', }}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={activeTab === 'Following' ? styles.inActiveButton : styles.button} onPress={() => setActiveTab('ReusableFlatlist')}>
                            <Text style={activeTab === 'Foryou' ? styles.btnText : styles.inActiveBtnText}>ForYou</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={activeTab === 'Following' ? styles.button : styles.inActiveButtonfollowing} onPress={() => setActiveTab('Following')}>
                            <Text style={activeTab === 'Following' ? styles.btnText : styles.inActiveBtnText}>Following</Text>
                        </TouchableOpacity>
                    </View>
                    {activeTab === 'Following' ? <Following /> : <ForYou />}
                </View>
            </View>


        </View>


    )
}

const ForYou = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View style={styles.flat_container}>
            <TouchableOpacity onPress={() => navigation.navigate('ListView')}>

                <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage} />
                <View style={styles.rowContainer}>
                    <Image source={require('../../Assets/images/pic.png')} style={styles.thumbnail} />
                    <Text style={styles.nameText}>{item.driver}</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Icon name={'heart-box'} size={26} color={'#feb5ff'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.descriptionText}>
                    Lorem Ipsum is simply dummy text of the printing
                </Text>
                <Text style={styles.hashtagText}>#Lorem #Lorem #Lorem #Lorem</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <Text>Welcome To The For For You </Text>
            {/* <View style={{ justifyContent: "center", }}> */}
            <FlatList
                scrollEnabled={true}
                // style={{ flex: 1, bott }}
                data={data}
                renderItem={renderItem}
                // keyExtractor={item => item.id}
                numColumns={2}
            />
            {/* </View> */}
        </View>
    )
}

const Following = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View style={styles.flat_container}>
            <TouchableOpacity onPress={() => navigation.navigate('ListView')}>

                <Image source={require('../../Assets/images/pic.png')} style={styles.mainImage} />
                <View style={styles.rowContainer}>
                    <Image source={require('../../Assets/images/pic.png')} style={styles.thumbnail} />
                    <Text style={styles.nameText}>{item.driver}</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Icon name={'heart-box'} size={26} color={'#feb5ff'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.descriptionText}>
                    Lorem Ipsum is simply dummy text of the printing
                </Text>
                <Text style={styles.hashtagText}>#Lorem #Lorem #Lorem #Lorem</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <Text>Welcome To The Following </Text>
            {/* <View style={{ justifyContent: "center", }}> */}
            <FlatList
                scrollEnabled={true}
                data={data}
                renderItem={renderItem}
                numColumns={2}
            />
            {/* </View> */}
        </View>
    )
}