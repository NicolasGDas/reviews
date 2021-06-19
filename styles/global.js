import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        padding:24
    },
    titleText:{
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        color: '#333',
        height: 45,
        fontWeight: "bold",
        flexDirection:'row',
    },
    paragraph:{
        // marginVertical:8,
        // lineHeight: 20,
    },
    input:{
        borderWidth:1,
        borderColor: '#dddd',
        padding:10,
        fontSize:18,
        borderRadius:6,

    },
    errorsText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',

    },
})

export const images = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}