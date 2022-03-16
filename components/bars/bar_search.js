import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({navigation}) => {
    const [text, onChangeText] = useState({
        lokasi: '',
        destinasi: '',
        tanggal: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        <View style={formStyle.box}>
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="airplane-takeoff" size={20} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Keberangkatan"
                        value={text.lokasi}
                        onChangeText={clickHandler('lokasi')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Tujuan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="airplane-landing" size={20} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Tujuan"
                        value={text.destinasi}
                        onChangeText={clickHandler('destinasi')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="calendar-month" size={20} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Tanggal Keberangkatan"
                        value={text.tanggal}
                        onChangeText={clickHandler('tanggal')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <TouchableOpacity 
                    style={formStyle.button}
                    onPress={() => navigation.navigate('Result', {data: text})}
                >
                    <Text style={formStyle.textButton}>Cari</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const formStyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 50,
        width: '80%',
        position: 'absolute',
        top: '50%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    package:{
        marginTop: 10,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 3,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Icon:{
        padding: 10,
    },
    Input:{
        fontSize: 13,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'black',
    },
})

export default SearchBar