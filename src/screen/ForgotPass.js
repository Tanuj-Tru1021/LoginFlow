import React, { useState } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import InputComp from '../components/InputComp'
import ButtonComp from '../components/ButtonComp'
import { RenderError, reg } from '../components/Util'

const ForgotPass = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState({})

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'black' }}
            keyboardShouldPersistTaps='handled'>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <Image
                source={require('../../assets/screenHeader.png')}
                style={{ width: '100%' }}
            />
            <View style={{ paddingHorizontal: 30 }}>
                <Text
                    style={{
                        fontSize: 24, color: "#fff",
                        fontStyle: 'normal', fontWeight: '500',
                        textAlign: 'center', paddingTop: 31
                    }}>
                    Forgot Password
                </Text>

                <Text
                    style={{
                        color: "#FEFCFC", fontSize: 18, fontStyle: 'normal',
                        fontWeight: 500, marginTop: 61
                    }}>
                    Enter your email
                </Text>
                <InputComp
                    value={email}
                    containerstyle={{ marginTop: 4, }}
                    onChangeText={(text) => {
                        setEmail(text.toLowerCase().trim())
                        setError(prev => ({ ...prev, email: (!text) }))
                    }}
                    placeholder={"Email"}
                    autoCapitalize={'none'}
                />
                {error.email && <RenderError message='Enter Email' />}
                {(email && !reg.test(email)) && <RenderError message='Enter Valid Email' />}

                <View style={{
                    flexDirection: 'row', marginTop: 11,
                    justifyContent: 'space-between', flex: 1
                }}>
                    <Text
                        style={{
                            color: '#616161', fontSize: 16,
                            fontWeight: 500, fontStyle: 'normal'
                        }}>
                        Choose Another Method
                    </Text>
                    <TouchableOpacity  >
                        <Text
                            style={{
                                color: '#D9D9D9', fontSize: 16,
                                fontWeight: 500, fontStyle: 'normal'
                            }}>
                            Need Help?
                        </Text>
                    </TouchableOpacity>
                </View>

                <ButtonComp
                    disable={!reg.test(email)}
                    onPress={() => {
                        setEmail("")
                        navigation.navigate('Verification')
                    }}
                    val={"Send OTP"}
                />
            </View>
        </ScrollView>
    )
}

export default ForgotPass