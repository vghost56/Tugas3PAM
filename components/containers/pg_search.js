import React from 'react'
import {View, Text} from 'react-native'
import Header from '../assets/header'
import SearchBar from '../bars/bar_search'
import Footer from '../assets/footer'

const Search = ({navigation}) =>{
    return (
        <View>
          <Header/>
          <SearchBar navigation={navigation}/>
          <Footer/>
        </View>
      )
}

export default Search