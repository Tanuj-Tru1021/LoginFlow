import React, { useState } from 'react'
import { Text, ScrollView, View, TouchableOpacity, Image, Alert, StatusBar } from "react-native"
import InputComp from '../components/InputComp'
import NameComp from '../components/NameComp'
import ButtonComp from '../components/ButtonComp'
import { reg, RenderError } from '../components/Util'

const Login = ({ navigation }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        hidePassword: true
    })
    const [error, setError] = useState({})

    const manageVisibility = () => {
        setData({ ...data, "hidePassword": !data.hidePassword })
    }

    const login = () => {
        Alert.alert("Message", "Login Successfully")
        setData({ "email": "", "password": "" })
        navigation.navigate('Home')
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'black' }}
            keyboardShouldPersistTaps='handled'>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <Image
                source={require('../../assets/screenHeader.png')}
                style={{ width: "100%" }}
            />
            <View style={{ paddingHorizontal: 30 }} >
                <Text
                    style={{
                        fontSize: 28, color: "#fff",
                        fontStyle: 'normal', fontWeight: '500',
                        textAlign: 'center', paddingTop: 51
                    }}>
                    Welcome
                </Text>

                <Text
                    style={{
                        color: "#c4c4c4", textAlign: "center",
                        fontSize: 20, fontWeight: 500
                    }}>
                    Login to your account
                </Text>

                <NameComp name={"Email"} namestyle={{ paddingTop: 25 }} />

                <InputComp
                    value={data.email}
                    containerstyle={{ marginTop: 4, paddingHorizontal: 18 }}
                    keyboardType={"email-address"}
                    onChangeText={(text) => {
                        setData({ ...data, "email": text.trim() })
                        setError(prev => ({ ...prev, email: (!text) }))
                    }}
                    placeholder={"Email"}
                    autoCapitalize={'none'}
                />

                {error.email && <RenderError message='Enter Email' />}
                {(data.email && !reg.test(data.email)) && <RenderError message='Enter Valid Email' />}

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
                                position: 'absolute', justifyContent: 'center', right: 15, top: 13, tintColor: '#C4C4C4'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {error.password && <RenderError message='Enter Password' />}
                {(data.password && data.password.length < 5) && <RenderError message='Password should be minimum 5 characters' />}

                <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}
                    style={{ flex: 1, alignItems: 'flex-end', alignSelf: 'flex-end' }}
                >
                    <Text
                        style={{
                            fontSize: 16, color: '#EA4335',
                            fontWeight: 500,
                            paddingTop: 7
                        }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <ButtonComp
                    disable={!(data.email.length !== 0 && reg.test(data.email) && data.password.length > 5)}
                    onPress={login}
                    val={'Login'}
                />

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text
                        style={{
                            color: '#616161', fontSize: 16,
                            fontWeight: 500, fontStyle: 'normal',
                            marginTop: 14
                        }}>
                        Don't have account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={{ marginLeft: 4 }} >
                        <Text
                            style={{
                                color: '#D9D9D9', fontSize: 16,
                                fontWeight: 500, fontStyle: 'normal',
                                marginTop: 14
                            }}>
                            Create Now
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 49, marginBottom: 20 }}>

                    <Image
                        source={require('../../assets/googleLogo.png')}
                    />

                    <Image
                        source={require('../../assets/facebookLogo.png')}
                        style={{ marginLeft: 42 }}
                    />

                    <Image
                        source={require('../../assets/instagramLogo.png')}
                        style={{ marginLeft: 42 }}
                    />

                </View>
            </View>
        </ScrollView>
    )
}

export default Login