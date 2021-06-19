
import { styleSheets } from 'min-document';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';



export default function FlatButton({text, onPress}){

    return(
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.btn}>
                <Text style={styles.btntext}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        borderRadius:8,
        paddingVertical: 14,
        paddingHorizontal:10,
        backgroundColor: '#f01d71'
    },
    btntext:{   
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
})