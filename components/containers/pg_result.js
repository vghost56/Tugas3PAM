import React from 'react'
import {View, Text} from 'react-native'
import ResHeader from '../assets/resheader'
import ResultBar from '../bars/bar_result'
import Footer from '../assets/footer'

const Result = ({navigation}) =>{
    return (
        <View>
          <ResHeader/>
          <ResultBar navigation={navigation}/>
          <Footer/>
        </View>
      )
}

export default Result