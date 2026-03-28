import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Switch, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
// import SignOutModal from '../reuseable/SignOutButton';
// import auth from '@react-native-firebase/auth';
import CustomButton from '../../Components/CustomButton';
import CustomText from '../../Components/CustomText';
import LabelHeader from '../../Components/LabelHeader';
import SimpleButton from '../../Components/Reuse_touchbutton';
// import UserProfile from '../../Components/ProfileComponent';


const Setting = ({ navigation }) => {
  const [switchValue, setSwitchValue] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isSignOutModalVisible, setIsSignOutModalVisible] = useState(false);

  const toggleSwitch = () => {
    setSwitchValue(!switchValue)
    // setSwitchValue((previousValue) => !previousValue);
    // You can perform actions based on the switch value here
  };
  const showSignOutModal = () => {
    setIsSignOutModalVisible(true);
  };

  const closeSignOutModal = () => {
    setIsSignOutModalVisible(false);
  };

  // handleSignOut
  const handleSignOut = () => {
    setIsSigningOut(true);

    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      })
      .finally(() => {
        setIsSigningOut(false);
        setIsSignOutModalVisible(false);
        navigation.navigate('Login');
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <LabelHeader
          leftIcon="left"
          onPress={() => navigation.goBack()}
          label={'My Profile'}
        />
      </View>
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
          <Text style={styles.infotext}>0{'\n'} Boards</Text>
          <Text style={styles.infotext}>0 {'\n'} Followers</Text >
          <Text style={styles.infotext}> 0 {'\n'} Following</Text>
        </View>
      </View>
      <ScrollView style={{ marginBottom: '20%' }}>
        <Text style={styles.heading}>Account</Text>
        <View style={styles.profileContainer}>
          <SimpleButton label={'EditProfile'} onPress={() => navigation.navigate('EditProfile')} />
          <SimpleButton label={'My Wish List'} />
          <SimpleButton label={'Notifications'}
            showToggle onToggle={() => toggleSwitch}
            value={switchValue}
            onValueChange={toggleSwitch} />
          <Text style={styles.heading}>Support</Text>
          <SimpleButton label={'Terms of Services'} />
          <SimpleButton label={'Privacy Policy'} />
        </View>
        <View style={{ marginLeft: '5%', }}>
          <CustomText children={'Delete Your Account'} variant={'simple'} color={'red'} onPress={() => navigation.navigate('DeleteAccount')} style={{ marginBottom: 5 }} />
          <CustomText children={'Log out'} variant={'simple'} onPress={() => navigation.navigate('Login')} />

        </View>
      </ScrollView>
    </View>
  );
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    margin: 10
  },
  buttonsContainer: {
    marginTop: 10,
  },
  userContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    padding: 10,
    borderRadius: 20,
    margin: 10
  },
  imageContainer: {
    borderRadius: 50, // Assuming you want a circular image
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Adjust as needed
    // marginTop: 10,

  },
  info: {
    fontSize: 16,
    // color: '#000',
    // fontWeight: 'bold'
  },
  infotext: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Adjust as needed
    marginTop: 10,
    alignItems: 'center'

  },

});
