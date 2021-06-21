import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'


const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Reviews' navigation={navigation} />
            }
        },

    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details'
        }

    }
}



const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor: '#5555',
        headerStyle: {backgroundColor: '#eee', height: 70,}
    }
});

export default HomeStack