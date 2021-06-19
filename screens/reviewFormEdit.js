import React from 'react';
import {StyleSheet,Button,TextInput,View,Text, RecyclerViewBackedScrollView} from 'react-native';
import {globalStyle, globalStyles} from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

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

export default function ReviewForm({param}){

    return(
        <View style={globalStyles.container}>
            <Formik 
                
                initialValues={{title:param.selectedItem.title,body:param.selectedItem.body,rating:param.selectedItem.rating, id:param.selectedItem.key}}
                validationSchema ={reviewSchema}
                onSubmit={(values,actions)=>{
                    actions.resetForm()
                    param.editReview(values)
                }}
            >
                {(props)=>(
                    <View>
                        <Text>Edit</Text>
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
                        multiline minHeight={60}
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
                        value={(props.values.rating).toString()}
                        keyboardType='numeric'
                        onBlur = {props.handleBlur('rating')}
                        />
                         {/*Error message for title */}
                        <Text style={globalStyles.errorsText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='submit' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )

}
