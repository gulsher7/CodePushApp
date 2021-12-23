//import liraries
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const ButtonComp = ({
    btnText = '',
    btnStyle = {},
    textSTyle = {},
    onClick = () => { }
}) => {
    console.log("btn style", btnStyle)
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.btnStyle,
                ...btnStyle
            }}
            onPress={onClick}
        >
            <Text style={{
               ...styles.textStyle,
               ...textSTyle
            }}>{btnText}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: 'black',
        height: 48,
        width: '100%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    textStyle:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform:'uppercase'
    }
});


export default ButtonComp;
