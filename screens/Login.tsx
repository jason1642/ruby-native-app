import {Text, View, StyleSheet, } from 'react-native'
import * as React from 'react'
import { Button } from '@rneui/base'
// import { Navigate } from 'react-router-dom'
const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>
                This is the login Screen
            </Text>
      
            <Button title='Login' onPress={() => {navigation.navigate('Homepage')}}/>
        </View>
    )
}
export default Login


const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });