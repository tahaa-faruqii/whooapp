// import { View, Text, KeyboardAvoidingView } from 'react-native'
// import React, { useState } from 'react'

const { default: Task } = require("./Src/Screens/Task/Index");

import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Src/Navigation/StackNav'
import Public from './Src/Screens/PublicPrivate/Index';



export default function App() {
  // const [secure, setIsSecure] = useState(true)
  // const toggleSecure = () => {
  //   setIsSecure(!secure)
  // }
  return (


    // <NavigationContainer>
    //   <StackNav />
    // </NavigationContainer>
    // <Public />
    <Task />


  )
}
