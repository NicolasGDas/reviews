import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default class Home extends Component {

    render(){
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>About Screen</Text>
            </View>
        )

    }


}


const styles = StyleSheet.create({



})