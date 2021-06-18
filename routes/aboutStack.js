import {createStackNavigator} from 'react-navigation-stack'
import Header from '../shared/Header'
import React from 'react'
import About from '../screens/about'

const screens = {
    about:{
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation ={navigation}/>,
            }
        }
    }
}



const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#4444',
        headerStyle: {backgroundColor: '#eee',height:60}
    }
});

export default AboutStack