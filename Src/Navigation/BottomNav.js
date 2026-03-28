import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/Home/Index';
import Setting from '../Screens/Setting/Index';

import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../Screens/Profile/Index';
const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: '#cdf886',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: '9%',
                    paddingBottom: 5,
                    width: '90%',
                    marginBottom: '2%',
                    margin: 10,
                    left: '2%',
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'grey'

                }

            }}

        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="home" color={focused ? '#000' : '#777676'} size={22} />
                    ),


                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon name="plus" color={focused ? '#000' : '#777676'} size={22} />
                    ),
                    alignSelf: 'center'
                }} />
            <Tab.Screen name="Setting" component={Setting}
                options={{

                    tabBarIcon: ({ focused, }) => (
                        <Icon name="user" color={focused ? '#000' : '#777676'} size={22} />
                    ),

                }} />
        </Tab.Navigator >
    );
}