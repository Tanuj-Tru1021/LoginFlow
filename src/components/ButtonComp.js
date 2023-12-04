import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ButtonComp = ({onPress, val, buttonstyle, disable}) => {
    console.log("disable - ",disable)
    return (
        <TouchableOpacity
            disabled={disable}
            style={{
                backgroundColor: disable ? 'grey' : '#29B6F6', height: 48,
                 justifyContent: 'center',
                marginHorizontal: 15, marginTop: 22, 
                borderRadius: 22, ...buttonstyle
            }}
            onPress={onPress}>
            <Text
                style={{
                    color: "white",
                    fontSize: 20, textAlign: 'center', fontWeight: 500
                }}>
                {val}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonComp