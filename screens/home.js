import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';



export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        {title: 'Bloodborne',rating: 5, body: 'lorem ipsum',key:'1'},
        {title: 'Witcher 3',rating: 5, body: 'lorem ipsum',key:'2'},
        {title: 'World of Warcraft',rating: 2, body: 'lorem ipsum',key:'3'},
        {title: 'League of Legends',rating: 1, body: 'lorem ipsum',key:'4'}
    ]);
        return (
            <View style={globalStyles.container}>
                <FlatList 
                    data={reviews}
                    renderItem = {({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{ item.title }</Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )

}


const styles = StyleSheet.create({})