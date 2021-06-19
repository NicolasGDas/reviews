import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyle, globalStyles} from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(15),
    rating: yup.string()
        .required()
        .test('is-num-1-5','Rating must be a numer 1 - 5',(val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({addReview}){


    return(
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{title: '',body:'',rating:''}}
                validationSchema ={reviewSchema}
                onSubmit={(values,actions)=>{
                    actions.resetForm()
                    addReview(values)

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
                        <TextInput 
                        style={globalStyles.input}
                        placeholder = 'Review '
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        onBlur = {props.handleBlur('body')}
                        />
                         {/*Error message for title */}
                        <Text style={globalStyles.errorsText}>{props.touched.body && props.errors.body}</Text>
                        {/* Input raiting */}
                        <TextInput 
                        style={globalStyles.input}
                        placeholder = 'Rating 1-5'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'
                        onBlur = {props.handleBlur('rating')}
                        />
                         {/*Error message for title */}
                        <Text style={globalStyles.errorsText}>{props.touched.rating && props.errors.rating}</Text>
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )

}
