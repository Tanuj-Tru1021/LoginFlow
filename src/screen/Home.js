import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{color: 'white', fontSize: 30}}>HOME PAGE</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: '#c4c4c4', marginTop: 20}}>Welcome! You just logged in!</Text>
        </View>
    )
}

export default Home