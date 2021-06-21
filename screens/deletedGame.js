import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';


const reviewSchema = yup.object({
    confirmation: yup.string()
    .required()
    .test('confirmed','plz enter confirmar',(val)=>{
        return (val === 'conf')
    })
})

export default function deleteReview({params}){
    console.log(params.selectedItem.key)
    return(
        <View style= {globalStyles.container}>
            <Formik
                initialValues={{confirmation:'', id:params.selectedItem.key}}
                validationSchema = {reviewSchema}
                onSubmit={(values,actions)=>{
                    console.log(values)
                    actions.resetForm()
                    params.deleteGame(values.id)
                }}>
                    {(props)=>(
                        <View>
                            <TextInput 
                            style={globalStyles.input}
                            placeholder = 'Seguro desea borrar?'
                            onChangeText={props.handleChange('confirmation')}
                            value={((props.values.confirmation).toString()).toLowerCase()} 
                            onBlur = {props.handleBlur('confirmation')}
                            />
                            <Text style={globalStyles.errorsText}>
                                {props.touched.confirmation && props.errors.confirmation}
                            </Text>
                            <FlatButton text='submit' onPress={props.handleSubmit}/>
                        </View>
                    )}
            </Formik>
        </View>
    )
}