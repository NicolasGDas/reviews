import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, 
    Alert ,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewFormAdd from './reviewFormAdd';
import ReviewFormEdit from './reviewFormEdit';
import DeleteReview from './deleteReview';
import { StatusBar } from 'expo-status-bar';
import { addReviewTemp } from '../data/reviewsAdded';
import { data } from '../data/reviews';



export default function Home({navigation}) {
    {/*STATES--------------------------------------------------------- */}
    const [selectedItem,setSelectedItem]=useState()
    const [modalDeleteOpen,setModalDeleteOpen]=useState(false)
    const [modalAddOpen,setModalAddOpen] = useState(false);
    const [modalEditOpen,setModalEditOpen] = useState(false);
    const [reviews, setReviews] = useState(data);
    {/**--------------------------------------------------------------- */}

    {/**Funtions and variables ------------------------------------------------------------------ */}
    const addReview = (review)=>{
        review.key = (Math.floor(Math.random() *(1000-5) * 10)).toString();
        setReviews((currentReviews)=>{
            return[review,...currentReviews]
        });
        //addReviewTemp(review)
        setModalAddOpen(false)

    }
    const editReview = (reviewToUpdate)=>{
        let i =0
        let encontrado = false
        while (i < reviews.length && !encontrado){
            if(reviews[i].key === reviewToUpdate.id){
                reviews[i].title = reviewToUpdate.title
                reviews[i].body = reviewToUpdate.body
                reviews[i].rating = reviewToUpdate.rating
                encontrado = true
            }
            i = i +1
        }
        setModalEditOpen(false)

    }
    
    const handleSelectedItem = (id)=>{
        setModalEditOpen(true)
        const selected = reviews.filter((review =>{ if(review.key === id){return review}}))
        setSelectedItem(selected[0])
    }
    const handleSelectedItemDelete = (id)=>{
        setModalDeleteOpen(true)
        const selected = reviews.filter((review =>{ if(review.key === id){return review}}))
        setSelectedItem(selected[0])

        
    }
    const deleteReview =  (id)=>{
        console.log("Entre al delete")
        console.log(id)
        const reviewToDelete = reviews.filter(review => review["key"]=== id)
        reviews.splice(reviews.indexOf(reviewToDelete[0]),1)       
        setModalDeleteOpen(false)
        
    }

    const dataModify = {editReview,selectedItem}
    const dataDelete = {deleteReview,selectedItem}
    {/**Funtions ------------------------------------------------------------------ */}



        return (
            <View style={globalStyles.container} >
                <StatusBar
                    hidden
                />
                {/**MODAL E AGREGADO------------- */}
                <Modal visible={modalAddOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalAddOpen(false)}
                    />
                        <ReviewFormAdd addReview={addReview}/>
                    </View>

                    </TouchableWithoutFeedback>
                </Modal>
                {/**MODAL DE EDITION */}
                <Modal visible={modalEditOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalEditOpen(false)}
                    />
                        <ReviewFormEdit param={dataModify}/>
                    </View>

                    </TouchableWithoutFeedback>
                </Modal>      
                {/**MODAL DE Delete */}
                <Modal visible={modalDeleteOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalDeleteOpen(false)}
                    />
                        <DeleteReview params={dataDelete}/>
                    </View>

                    </TouchableWithoutFeedback>
                </Modal>      

                <MaterialIcons
                    name= 'add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=> setModalAddOpen(true)}
                />
                {/**First modal for adding------------- */}
                {/**Flat list items listed--------------------------- */}

                <FlatList 
                    data={reviews}
                    renderItem = {({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)} >
                            <Card>
                                <Text style={globalStyles.titleText}>{ item.title }</Text>
                                <MaterialIcons
                                    name= 'edit'
                                    size={24}
                                    style={styles.editbtn}
                                    onPress={()=> handleSelectedItem(item.key)}
                                />
                                <MaterialIcons
                                    name= 'delete'
                                    size={24}
                                    style={styles.deletebtn}
                                    onPress={()=> handleSelectedItemDelete(item.key)}
                                />
                            </Card>
                        </TouchableOpacity>
                    )}
                />
                {/**Flat list items listed--------------------------- */}
                


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
    },
    deletebtn:{
        position:'absolute',
        right: 0,
        flexDirection:'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
    },
    editbtn:{
        position:'absolute',
        right: 45,
        flexDirection:'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
    },
});