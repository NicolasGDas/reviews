import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, 
    Alert ,TouchableWithoutFeedback,Keyboard,Image,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewFormAddJuego from './reviewAddJueguito';
import ReviewFormAddReviewer from './reviewAddReviewer';
import DeletedGame from './deletedGame';
import ModifyUser from './modifyUser'
import { juegos } from '../data/juegos';
import { reviewersDb } from '../data/reviewers';

export default function About () {
    const [juegosFavoritos,setjuegosFavoritos]=useState(juegos)
    const [reviewers,setreviewers]=useState(reviewersDb)
    const [modalAddJuegoOpen,setModalAddJuegoOpen] = useState(false);
    const [modalAddReviewer,setModalAddReviewer] = useState(false);
    const [modalEditOpen,setModalEditOpen] = useState(false);
    const [selectedItem,setSelectedItem]=useState()
    const [modalDeleteOpen,setModalDeleteOpen]=useState(false)
    
    const addGame = (nuevoJuego)=>{
        nuevoJuego.key = (Math.floor(Math.random() *(1000-5) * 10)).toString();
        setjuegosFavoritos((currentGames)=>{
            return[nuevoJuego,...currentGames]
        });
        setModalAddJuegoOpen(false)
    }
    const addReviewer = (nuevoReviewer)=>{
        nuevoReviewer.key = (Math.floor(Math.random() *(1000-5) * 10)).toString();
        nuevoReviewer.image = require('../assets/descarga.png')
        console.log(nuevoReviewer)
        setreviewers((currentReviewers)=>{
            return[nuevoReviewer,...currentReviewers]
        });
        setModalAddReviewer(false)
    }
    const edit = (id)=>{
        const selected = reviewers.filter((reviewer =>{ if(reviewer.key === id){return reviewer}}))
        setSelectedItem(selected[0])
        setModalEditOpen(true)
    }
    const deleted = (id)=>{
        const selected = juegosFavoritos.filter((juego =>{ if(juego.key === id){return juego}}))
        setSelectedItem(selected[0])
        setModalDeleteOpen(true)
    }
    
    const deleteGame =  (id)=>{
        console.log("Entre al delete")
        console.log(id)
        const GameToDelete = juegosFavoritos.filter(juego => juego["key"]=== id)
        juegosFavoritos.splice(juegosFavoritos.indexOf(GameToDelete[0]),1)       
        setModalDeleteOpen(false)
        
    }
    
    const editReviewer = (reviewerToUpdate)=>{
        let i =0
        let encontrado = false
        console.log(reviewerToUpdate)
        while (i < reviewers.length && !encontrado){
            if(reviewers[i].key === reviewerToUpdate.key){
                reviewers[i].nombre_rev = reviewerToUpdate.nombre_rev
                reviewers[i].image = reviewerToUpdate.image
                reviewers[i].user_name = reviewerToUpdate.user_name
                reviewers[i].key = reviewerToUpdate.key
                encontrado = true
            }
            i = i +1
        }
        setModalEditOpen(false)
    }
    
    const dataDelete = {deleteGame,selectedItem}
    const dataModify = {editReviewer,selectedItem}
    const imagee = ['https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200']
    
    return (
        <View style={globalStyles.container}>
                <StatusBar
                    hidden
                    />
                    
                <Text style={globalStyles.titleText}>Somos una app que hace reviews de juegos </Text>
                <Text>Nuestros Juegos favoritos:</Text>
                <FlatList 
                    horizontal
                    pagingEnabled
                    //style={styles.flatList}
                    data={juegosFavoritos}
                    renderItem = {({ item }) => (
                        <TouchableOpacity >

                                <Image source={item.image}
                                    style={{width: 100, height: 100, borderRadius: 400/ 2}} 
                                    />
                                <Text style={globalStyles.titleText}>{ item.title }<MaterialIcons
                                    name= 'delete'
                                    size={24}
                                    style={styles.deletebtn}
                                    onPress={()=> deleted(item.key)}
                                    /></Text>
                                
                        </TouchableOpacity>

)}
                    
/>
                <MaterialIcons
                    name= 'add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=> setModalAddJuegoOpen(true)}
                />
                <Text>Nuestros reviewers</Text>
                <FlatList 
                    horizontal
                    pagingEnabled
                    style={styles.flatList}
                    data={reviewers}
                    renderItem = {({ item }) => (
                        <TouchableOpacity >

                        <Image source={item.image}
                            style={{width: 100, height: 100, borderRadius: 400/ 2}} 
                            />
                        <Text style={globalStyles.titleText}>{ item.nombre_rev }<MaterialIcons
                            name= 'edit'
                            size={24}
                            style={styles.deletebtn}
                            onPress={()=> edit(item.key)}
                            /></Text>
                        
                </TouchableOpacity>
                    )}
                    />
                <MaterialIcons
                    name= 'add'
                    size={24}
                    style={styles.modalToggle}
                    onPress={()=> setModalAddReviewer(true)}
                    />

                {/**Modal de agregado de juegos */}
                <Modal visible={modalAddJuegoOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalAddJuegoOpen(false)}
                    />
                        <ReviewFormAddJuego addGame={addGame}/>
                    </View>

                    </TouchableWithoutFeedback>
                </Modal>      
                {/**Modal de agregado de reviewers */}
                <Modal visible={modalAddReviewer} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalAddReviewer(false)}
                    />
                        <ReviewFormAddReviewer addReviewer={addReviewer}/>
                    </View>

                    </TouchableWithoutFeedback>
                </Modal>      
                {/**-----------------------------------------*/}
                {/**Modal de deleted de juegos */}
                <Modal visible={modalDeleteOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalDeleteOpen(false)}
                    />
                        <DeletedGame params={dataDelete}/>
                    </View>
                        </TouchableWithoutFeedback>
                    </Modal>      
                
                    <Modal visible={modalEditOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    {/**MODAL DE EDITION */}
                    <View style={styles.modalContent}>
                    <MaterialIcons
                    name= 'close'
                    size={24}
                    style={{...styles.modalToggle,...styles.modalClose}}
                    onPress={()=> setModalEditOpen(false)}
                    
                    />
                        <ModifyUser params={dataModify}/>
                    </View>


                    </TouchableWithoutFeedback>
                </Modal>      

            </View>



        )




}


const styles = StyleSheet.create({
    deletebtn:{
        flexDirection:'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding:5,
        borderRadius: 10,
    },
    editbtn:{

        flexDirection:'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 5,
        borderRadius: 10,
    },
    flatList:{
        padding:5
    },
    touchable:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50,
    },
    titleText:{

        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        color: '#333',
        height: 45,
        fontWeight: "bold",
        flexDirection:'row',
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        alignSelf: 'center',
        borderColor: 'white',
        borderRadius: 100,
        color: 'white'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },



})