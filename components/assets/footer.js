import React from 'react'
import { View, Text, StyleSheet, Colors } from 'react-native'

const Footer = () => {
    return (
        <View style={Style.copyright}>
            <Text style={Style.Copy_text}>Copyright Orville Figo El Islami - 119140194</Text> 
        </View>
    )
}

const Style = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 800,
        left: 35,
    },
    Copy_text:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default Footer