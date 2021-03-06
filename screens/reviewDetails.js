import React  from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global';


export default function ReviewDetails ({ navigation }) {
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            
            <Card>
                <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
                <Text style={globalStyles.titleText}>{ navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>GordoReview rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )

}


const styles = StyleSheet.create({
    rating:{
        
        justifyContent: "flex-end",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth:1,
        borderTopColor: '#eee'
    },

})