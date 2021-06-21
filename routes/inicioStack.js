import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import Inicio from '../screens/inicio'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


const screens = {
    Inicio:{
        screen: Inicio,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='ChillReviews' navigation={navigation} />
            }
        },

    },
}



const InicioStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#5555',
        headerStyle: {backgroundColor: '#eee', height: 70,}
    }
});

export default InicioStack