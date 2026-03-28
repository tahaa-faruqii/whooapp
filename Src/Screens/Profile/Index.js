import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import LabelHeader from '../../Components/LabelHeader'
import styles from './ProfileStyles'
import image from '../../Utils/image'
const data = [
    { imagesource: require('../../Assets/images/pic.png') },
    { imagesource: require('../../Assets/images/pic.png') },
    { imagesource: require('../../Assets/images/pic.png') },
    { imagesource: require('../../Assets/images/pic.png') },
    { imagesource: require('../../Assets/images/pic.png') },


]

const Profile = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.flat_container}>
            <TouchableOpacity onPress={() => navigation.navigate('PublicPrivate')}>
                <Image source={item.imagesource} style={styles.mainImage} />
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <LabelHeader
                leftIcon="left"
                onPress={() => navigation.goBack()}

            />
            <View style={styles.userContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>hazel_12</Text>
                    <Text style={styles.info}>00-00-0000</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../Assets/images/pic.png')} style={styles.image} />
                </View>
                <Text style={styles.name}>Hazel Finch</Text>
                <View style={styles.statsContainer}>
                    <Text style={styles.infotext}>0 {'\n'} Boards</Text>
                    <Text style={styles.infotext}>0 {'\n'} Followers</Text>
                    <Text style={styles.infotext}> 0 {'\n'}Following</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '72%', margin: 10 }}>
                <FlatList style={{
                    borderWidth: 1,
                    borderRightWidth: 4,
                    borderBottomWidth: 4,
                    borderRadius: 20,
                    marginTop: "5%"
                }}
                    data={data}
                    renderItem={renderItem}
                    numColumns={2}
                />

            </View>
        </View>
    )
}

export default Profile

