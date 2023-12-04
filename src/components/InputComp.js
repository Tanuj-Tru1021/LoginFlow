import React from 'react'
import { TextInput } from 'react-native'

const InputComp = ({ placeholder, value, onChangeText, containerstyle, keyboardType, secure, maxLength, autoCapitalize }) => {
    return (
        <TextInput
            style={{
                height: 45, backgroundColor: 'white',
                borderRadius: 6, paddingLeft: 18, ...containerstyle
            }}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={secure}
            placeholderTextColor="#C4C4C4"
            maxLength={maxLength}
            autoCapitalize={autoCapitalize}
        />
    )
}

export default InputComp