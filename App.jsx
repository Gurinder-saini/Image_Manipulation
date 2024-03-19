import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RNImageManipulator from '@oguzhnatly/react-native-image-manipulator'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// import Testimg from './src/assets/testimage.jpg'

const App = () => {

  const Testimg = require('./src/assets/testimage.jpg')

  const [imgpath,setimgpath] = useState()
  
  const manipulateimg = async()=>{
    const manipResult = await RNImageManipulator.manipulate(
      imgpath,
      [{ rotate: 90 }],
      { format: "jpeg" }
    );

    console.log(manipResult)
    setimgpath(manipResult.uri)
  }


  const opengalry = async()=>{
    const result = await launchCamera();
    console.log(result.assets[0].uri)
    setimgpath(result.assets[0].uri)
  }
 

  return (
    <View style={{
      flex:1,
      alignItems:"center"
    }}>
     <View style={{
       width:300,
       height:300
     }}>

      {
        imgpath &&
        <Image source={{uri:imgpath}} style={{
          flex:1
        }}/>
      }
      </View>
       <TouchableOpacity onPress={()=>{
        manipulateimg()
      }}
      style={{
        backgroundColor:"lightblue",
        width:'50%',
        margin:20,
        padding:10,
        alignItems:"center",
        justifyContent:"center"
      }}
      >
        <Text style={{
          fontSize:20,
          color:"white"
        }}>Rotate img</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        opengalry()
      }}
      style={{
        backgroundColor:"orange",
        width:'50%',
        margin:20,
        padding:10,
        alignItems:"center",
        justifyContent:"center"
      }}
      >
        <Text style={{
          fontSize:20,
          color:"white"
        }}>open galary</Text>
      </TouchableOpacity>
      {
        imgpath &&
        <Text style={{
          width:'80% w'
        }}>{imgpath}</Text>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({})