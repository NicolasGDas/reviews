import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({navigation}) {

    const [modalOpen,setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Bloodborne',rating: 5, body: 'lorem ipsum',key:'1'},
        {title: 'Witcher 3',rating: 5, body: 'El mejor juego, no me dan los corazones para el rating',key:'2'},
        {title: 'World of Warcraft',rating: 2, body: 'lorem ipsum',key:'3'},
        {title: 'League of Legends',rating: 1, body: 'lorem ipsum',key:'4'}
    ]);

    const addReview = (review)=>{
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return[review,...currentReviews]
        });
        setModalOpen(false)

    }
        return (
            <View style={globalStyles.container} >

                <Modal visible={modalOpen} animationType='slide'>
                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalOpen(false)}
                />
                        <ReviewForm addReview={addReview}/>
                    </View>

                </Modal>

                <MaterialIcons
                    name= 'add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=> setModalOpen(true)}
                />

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


const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});