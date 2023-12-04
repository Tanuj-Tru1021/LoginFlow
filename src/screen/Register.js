import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image, Alert, StatusBar } from 'react-native'
import InputComp from '../components/InputComp'
import NameComp from '../components/NameComp'
import ButtonComp from '../components/ButtonComp'
import { RenderError, reg } from '../components/Util'

const Register = ({ navigation }) => {
    const [data, setData] = useState({
        username: '',
        email: '',
        mobileNumber: '',
        password: '',
        hidePassword: true
    })
    const [error, setError] = useState({})

    const manageVisibility = () => {
        setData({ ...data, "hidePassword": !data.hidePassword })
    }

    const registerNow = () => {
        console.log("Username is: " + data.username)
        console.log("Email is: " + data.email)
        console.log("Mobile Number is: " + data.mobileNumber)
        console.log("Password is: " + data.password)
        Alert.alert("Message", "Registered Successfully")
        setData({ "username": "", "email": "", "mobileNumber": "", "password": "" })
        navigation.navigate('Home')
    }

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
                        fontSize: 28, color: "#fff",
                        fontStyle: 'normal',
                        fontWeight: '500', textAlign: 'center'
                    }}>
                    Register
                </Text>

                <Text
                    style={{
                        color: "#c4c4c4", textAlign: "center",
                        fontSize: 20, fontWeight: 500
                    }}>
                    Create a new account
                </Text>

                <NameComp name={"Username"} namestyle={{ paddingTop: 18 }} />

                <InputComp
                    value={data.username}
                    containerstyle={{ marginTop: 4 }}
                    onChangeText={(text) => {
                        setData({ ...data, "username": text.trim() })
                        setError(prev => ({ ...prev, username: (!text) }))
                    }}
                    placeholder={"Username"}
                />
                {error.username && <RenderError message='Enter UserName' />}


                <NameComp name={"Email"} namestyle={{ marginTop: 6 }} />

                <InputComp
                    value={data.email}
                    containerstyle={{ marginTop: 4 }}
                    onChangeText={(text) => {
                        setData({ ...data, "email": text.trim() })
                        setError(prev => ({ ...prev, email: (!text) }))
                    }}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                />

                {error.email && <RenderError message='Enter Email' />}
                {(data.email && !reg.test(data.email)) && <RenderError message='Enter Valid Email' />}

                <NameComp name={"Mobile Number"} namestyle={{ marginTop: 6 }} />

                <InputComp
                    value={data.mobileNumber}
                    containerstyle={{ marginTop: 4 }}
                    onChangeText={(text) => {
                        text = text ? text?.replace(/[,.-]/g, '').replace(/^0+/, '') : ''
                        setData({ ...data, "mobileNumber": text.trim() })
                        setError(prev => ({ ...prev, mobileNumber: (!text) }))
                    }}
                    placeholder={"Mobile Number"}
                    keyboardType={'numeric'}
                    maxLength={10}
                />

                {error.mobileNumber && <RenderError message='Enter Mobile Number' />}
                {(data.mobileNumber && data.mobileNumber.length !== 10) && <RenderError message='Enter Valid Mobile Number' />}


                <NameComp name={"Password"} namestyle={{ marginTop: 6 }} />

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <InputComp
                        value={data.password}
                        containerstyle={{ marginTop: 4, position: 'relative', width: '100%', paddingHorizontal: 50 }}
                        onChangeText={(text) => {
                            setData({ ...data, "password": text.trim() })
                            setError(prev => ({ ...prev, password: (!text) }))
                        }}
                        placeholder={"Password"}
                        secure={data.hidePassword}
                    />

                    <TouchableOpacity onPress={() => manageVisibility()}>
                        <Image
                            source={data.hidePassword ? require('../../assets/eyeClosed.png') : require('../../assets/eyeOpen.png')}
                            style={{
                                width: 27, height: 24,
                                position: 'absolute', justifyContent: 'center',
                                right: 15, top: 13, tintColor: '#C4C4C4'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {error.password && <RenderError message='Enter Password' />}
                {(data.password && data.password.length < 5) && <RenderError message='Password should be minimum 5 characters' />}

                <ButtonComp
                    disable={!(data.username.length !== 0 && data.email.length !== 0 && reg.test(data.email) && data.password.length > 5 && data.mobileNumber.length === 10)}
                    onPress={() => registerNow()}
                    val={'Sign In'}
                />

                <View style={{
                    flex: 1, flexDirection: 'row',
                    justifyContent: 'center', marginBottom: 20
                }}>
                    <Text
                        style={{
                            color: '#616161', fontSize: 16,
                            fontWeight: 500, fontStyle: 'normal',
                            marginTop: 14
                        }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        style={{
                            marginTop: 14,
                            marginLeft: 5
                        }} onPress={() => navigation.goBack()} >
                        <Text
                            style={{
                                color: '#D9D9D9', fontSize: 16,
                                fontWeight: 500, fontStyle: 'normal',
                            }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register