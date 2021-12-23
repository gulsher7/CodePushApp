//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ButtonComp from '../Components/ButtonComp';
import HeaderComp from '../Components/HeaderComp';

// create a component
const Explore = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 16 }}>

                <HeaderComp
                    isBack={true}
                    leftIcon={'https://png.pngtree.com/png-vector/20190412/ourlarge/pngtree-vector-back-icon-png-image_931209.jpg'}
                    text={"Explore"}
                    textStyle={{ color: 'orange', fontSize: 20 }}
                    rightText="Edit"
                    onRight={() => alert("Edit Section")}
                />
                <ButtonComp
                    btnText="Go To Home"
                    btnStyle={{ backgroundColor: 'blue' }}
                    textSTyle={{ color: 'white' }}
                    onClick={() => navigation.navigate("Home")}
                />

            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Explore;
