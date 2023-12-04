import React from 'react'
import { Text } from 'react-native'

const NameComp = ({ name, namestyle }) => {
    return (
        <Text
            style={{
                color: "#FEFCFC",
                fontSize: 18, fontStyle: 'normal',
                fontWeight: 500,  ...namestyle
            }}>
            {name}
        </Text>
    )
}

export default NameComp