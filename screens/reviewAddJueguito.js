import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyle, globalStyles} from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
})

export default function ReviewForm({addGame}){


    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title:''}}
                validationSchema ={reviewSchema}
                onSubmit={(values,actions)=>{
                    actions.resetForm()
                    addGame(values)

                }}
            >
                {(props)=>(
                    <View>
                        {/* Input titulo */}
                        <TextInput 
                        style={globalStyles.input}
                        placeholder = 'Game title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title} 
                        onBlur = {props.handleBlur('title')}
                        />
                        {/*Error message for title */}
                        <Text style={globalStyles.errorsText}>{props.touched.title && props.errors.title}</Text>
                        {/* Input body */}
                        <FlatButton text='submit' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )

}
