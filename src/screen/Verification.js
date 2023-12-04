import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import OtpBox from '../components/OtpBox'
import ButtonComp from '../components/ButtonComp'

const Verification = ({ navigation }) => {
    const [otpCode1, setOtpCode1] = useState("")
    const [pinReady1, setPinReady1] = useState(false)
    const [otpCode2, setOtpCode2] = useState("")
    const [pinReady2, setPinReady2] = useState(false)
    const [timeLeft, setTimeLeft] = useState(59);
    const MAX_LENGTH = 5

    const startTimer = () => {
        timer = setTimeout(() => {
            if (timeLeft <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTimeLeft(timeLeft - 1);
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timer);
    });

    const start = () => {
        setTimeLeft(59);
        clearTimeout(timer);
        startTimer();
    }

    const validateOTP = () => {
        if (otpCode1 === otpCode2) {
            Alert.alert("Message", "Verification Successful")
            navigation.navigate('Login')
        } else {
            Alert.alert("", "OTP not match")
        }
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'black' }}
            keyboardShouldPersistTaps='handled'>
            <Image
                source={require('../../assets/screenHeader.png')}
                style={{ width: '100%' }}
            />
            <View >
                <Text
                    style={{
                        fontSize: 24, color: "#fff",
                        fontStyle: 'normal', fontWeight: '500',
                        textAlign: 'center', marginTop: 7
                    }}>
                    Verification
                </Text>
                <Text
                    style={{
                        color: "#c4c4c4", textAlign: "center",
                        fontSize: 18, fontWeight: 500,
                        marginLeft: 47, marginRight: 46
                    }}>
                    Messenger has send a code to verify your account
                </Text>
                <Text
                    style={{
                        color: "#FEFCFC", fontSize: 18,
                        fontStyle: 'normal', fontWeight: 500,
                        marginTop: 23, marginLeft: 20
                    }}>
                    Email OTP
                </Text>

                <OtpBox
                    code={otpCode1}
                    setCode={setOtpCode1}
                    maximumLength={MAX_LENGTH}
                    setIsPinReady={setPinReady1}
                />
                <Text
                    style={{
                        color: "#FEFCFC",
                        fontSize: 18, fontStyle: 'normal',
                        fontWeight: 500, marginTop: 19, marginLeft: 20
                    }}>
                    Mobile OTP
                </Text>
                <View >
                    <OtpBox
                        code={otpCode2}
                        setCode={setOtpCode2}
                        maximumLength={MAX_LENGTH}
                        setIsPinReady={setPinReady2}
                    />
                </View>

                <ButtonComp
                    disable={otpCode1.length === 0 || otpCode2.length === 0}
                    onPress={() => validateOTP()}
                    buttonstyle={{ marginLeft: 47, marginRight: 47 }}
                    val={"Verify"}
                />

                <TouchableOpacity style={{
                    flex: 1, flexDirection: 'row',
                    justifyContent: 'center', marginBottom: 20
                }}
                    onPress={() => start()}
                >
                    <Text
                        style={{
                            textAlign: 'center', marginTop: 7,
                            color: '#E5E5E5',
                            fontSize: 16, fontWeight: 500
                        }}>
                        Resend :
                    </Text>
                    <Text
                        style={{
                            marginTop: 7,
                            color: '#EE6C32',
                            fontSize: 16, fontWeight: 500
                        }}>
                        00:{timeLeft}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Verification