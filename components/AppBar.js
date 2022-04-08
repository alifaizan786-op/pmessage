import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';

import { Header } from '@rneui/themed';



const styles = StyleSheet.create({
    searchIco : {
        minHeight : 50,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
    },
    txt : {
        color:'#919191',
        fontWeight : 'bold',
        flex:10,
        textAlign:'center',
        fontSize:30
    },
    btn : {
        flex:2,
        minHeight : 50,
    }
})



const AppBar = () =>{
    return(
        <View style={styles.searchIco}>
            <Icon name="search" size={30} />

            <Text style={styles.txt}>
                P Message
            </Text>


        </View>
    )

}



export default AppBar