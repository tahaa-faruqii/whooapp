import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Index';
import ForgetPassword from '../Screens/ForgetPassword/Index';
import SignIn from '../Screens/SignIn/Index';
import Home from '../Screens/Home/Index';
import ListView from '../Screens/ListView.js/Index';
import Editable from '../Screens/Editable/Index';
import TextEdit from '../Screens/TextEdit/Index';
import BottomNav from './BottomNav';
import Setting from '../Screens/Setting/Index';
import Finish from '../Screens/Finish/Index';
// import Prof from '../Screens/Prof/Index';
import EditProfile from '../Screens/EditProfile/Index';
import DeleteAccount from '../Screens/DeleteAccount/Index';
import Profile from '../Screens/Profile/Index';
import PublicPrivate from '../Screens/PublicPrivate/Index';
// import ProfileScreen from '../Screens/Profile/Index';


const Stack = createNativeStackNavigator();
const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListView" component={ListView} />
            <Stack.Screen name="Editable" component={Editable} /> */}
            {/* <Stack.Screen name="TextEdit" component={TextEdit} /> */}
            <Stack.Screen name="Finish" component={Finish} />
            <Stack.Screen name='BottomNav' component={BottomNav} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PublicPrivate" component={PublicPrivate} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} />

        </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})