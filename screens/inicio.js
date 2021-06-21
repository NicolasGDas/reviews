import React, {useState} from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

import { MaterialIcons } from '@expo/vector-icons';
import { HeaderStyleInterpolators } from 'react-navigation-stack';
import { data } from '../data/reviews';
const { width, height } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;
export default function  About () {
        const scrollx = React.useRef(new Animated.Value(0)).current;
        const data = [
            'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
            'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'
        
        ];
        return (
            <View style={styles.view}>
                <StatusBar hidden/>
                <View
                style={StyleSheet.absoluteFillObject}
                >
                        {data.map((image,index)=>{
                            const inputRange =[

                                (index-1) * width,
                                index * width,
                                (index + 1) *width
                            ]
                            const opacity = scrollx.interpolate({
                                inputRange,
                                outputRange:[0,1,0]
                            })
                            return <Animated.Image
                                key={`image-${index}`}
                                source ={{uri:image}}
                                style={[
                                    StyleSheet.absoluteFillObject,{
                                        opacity
                                    }
                                ]}
                                blurRadius = {20}/>

                        })}
                </View>
                <Animated.FlatList
                    horizontal
                    pagingEnabled
                    onScroll={Animated.event(
                        [{nativeEvent:{contentOffset:{x:scrollx}}}],
                        {useNativeDriver:true}
                    )
                    }
                    data={data}
                    keyExtractor={(_,index)=> index.toString()}
                    renderItem = {({item})=>(
                        <View style ={styles.cards}>
                            <Image source={{uri:item}} style ={styles.flatlist}/>
                        </View>
                    )}/>
            </View>
        )



}


const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor: 'white'
    },
    flatlist:{
        alignSelf:'center',width:imageW,height: imageH,resizeMode:'cover',borderRadius: 18,
    },
    cards:{
        width: width ,
        justifyContent:'center',
        alignItems:'center',

    }

})