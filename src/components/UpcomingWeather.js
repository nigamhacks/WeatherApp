import React from 'react'
import {SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar} from 'react-native'
import{Feather} from '@expo/vector-icons' 

////////////////////////// DATA //////////////////////////
const DATA=[
    {dt_txt: "13-02-2023 12:00:00", 
main:{
    "temp_min": 4,
    "temp_max": 11,
}, 
    weather: [{
        main: 'clear'
    }]
},
  
{dt_txt: "13-02-2023 16:00:00", 
main:{
    "temp_min": 5,
    "temp_max": 10,
}, 
    weather: [{
        main: 'clear'
    }]
},

{dt_txt: "13-02-2023 20:00:00", 
main:{
    "temp_min": 6,
    "temp_max": 10,
}, 
    weather: [{
        main: 'clear'
    }]
}]

///////////////////////// Item ///////////////////////////////
const Item= (props) =>{
    const {dt_txt, min, max, condition}= props
    return(
        <View style ={styles.item}>
            <Feather name={'sun'} size={50} color ={'yellow'}/>
            <Text style={styles.dt}>{dt_txt}</Text>
            <Text style ={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
         
        </View>

    )
}
///////////////////// MAIN FUNCTION //////////////////////////////

const UpcomingWeather = () => {

//////////// Render Function Definition ////////////

    const renderItem=({item})=>(
        <Item condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min}
        max= {item.main.temp_max}
        />
    )
    return (
<SafeAreaView styles={styles.container}>
    <Text>
        UpcomingWeather !</Text>
        <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item)=>item.dt_txt}
        />
    
</SafeAreaView>
    );
}
///////////////////////// StyleSheet /////////////////////////

const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    },
    item:{
        padding : 20,
        marginVertical: 8,
        marginHorizontal:16, flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems : 'center',
        borderWidth: 5,
        backgroundColor:'red'
    },

    temp:{
        color: 'cyan', 
        fontSize:25, 
        
    },
    dt:{
        color : 'white',
        fontWeight: 'bold',
        fontSize:20
    }
})

//export 

export default UpcomingWeather;