import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyle, globalStyles} from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    nombre_rev: yup.string()
        .required(),
    user_name: yup.string()
    .required()
})

export default function EditUser({params}){


    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{nombre_rev:params.selectedItem.nombre_rev, user_name:params.selectedItem.user_name, image:params.selectedItem.image,key:params.selectedItem.key}}
                validationSchema ={reviewSchema}
                onSubmit={(values,actions)=>{
                    actions.resetForm()
                    params.editReviewer(values)

                }}
            >
                {(props)=>(
                    <View>
                        {/* Input titulo */}
                        <Text>Ingrese el nombre del usuario</Text>
                        <TextInput 
                        style={globalStyles.input}
                        placeholder = 'Ingrese nuevo nombre del nuevo reviewer'
                        onChangeText={props.handleChange('nombre_rev')}
                        value={props.values.nombre_rev} 
                        onBlur = {props.handleBlur('nombre_rev')}
                        />
                        {/*Error message for nombre_rev */}
                        <Text style={globalStyles.errorsText}>{props.touched.nombre_rev && props.errors.nombre_rev}</Text>
                        {/* Input body */}
                        <Text>Ingrese el usuario del reviewer</Text>
                        <TextInput 
                        style={globalStyles.input}
                        placeholder = 'Ingrese el nuevo usuario del nuevo reviewer'
                        onChangeText={props.handleChange('user_name')}
                        value={props.values.user_name} 
                        onBlur = {props.handleBlur('user_name')}
                        />
                        {/*Error message for user_name */}
                        <Text style={globalStyles.errorsText}>{props.touched.user_name && props.errors.user_name}</Text>
                        {/* Input body */}
                        <FlatButton text='submit' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )

}
