import React from "react";
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
//vector libray using for icons and it is installed by default 
//when creating expo project or App 
import {Feather} from '@expo/vector-icons';

const App=()=>{
return (
  <SafeAreaView style={styles.wrapper}> 
  <View style={styles.container}>
    <Feather name='sun' size={100}></Feather>
    <Text>Current Weather</Text>
    <Text style={styles.temp}>6</Text>
    <Text style={styles.feels}>Feels like 5</Text>
    <Text style={styles.lowHigh}>High: 8 low: 6</Text>
  </View>

  <View style={styles.bodyWrapper}>
    <Text style={styles.description}>
      It's Sunny !
    </Text>
    <Text style={styles.message}>
      It's Perfect T-shirt Weather 
    </Text>
  </View>
  </SafeAreaView>
);
}
const styles=StyleSheet.create({
  wrapper:{
    backgroundColor:'#e6e6fa',// lavender 
    flex:1,
    
  },
  container:{
    
    flex:1,
    alignItems:'center'
  },
  
  temp:{
    color:'black',
    fontSize:48,
    alignItems:'center'
  },
  feels:{
    fontSize:30, 
    color:'black',
  }, 
  lowHigh:{
    fontSize:10, 

  },
  bodyWrapper:{
    paddingLeft:25, 
    marginBottom:10,
    justifyContent:'flex-end', 
    alignItems:'flex-start'
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})
export default App;