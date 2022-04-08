import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';



const styles = StyleSheet.create({
    fuck : {
        minHeight : 50,
        backgroundColor : '#AB2626',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    txt : {
        color:'#ffffff',
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
        <View style={styles.fuck}>
            <Text style={styles.txt}>
                Fuck You Tony
            </Text>
        </View>
    )

}



export default AppBar