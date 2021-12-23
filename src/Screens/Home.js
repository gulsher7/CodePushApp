//import liraries
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import ButtonComp from '../Components/ButtonComp';
import DropDown from '../Components/DropDown';
import HeaderComp from '../Components/HeaderComp';

let fruits = [{ id: 1, name: 'Mango' }, 
{ id: 2, name: 'Banana' }, 
{ id: 3, name: 'Apple' },
{ id: 4, name: 'Orange' },
{ id: 5, name: 'Starwbery' },
{ id: 6, name: 'Gavava' },
{ id: 7, name: 'Lichi' },
{ id: 8, name: 'Apple' },
{ id: 9, name: 'Apple' },
{ id: 10, name: 'Apple2' },
]

const Home = ({ navigation }) => {

    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginHorizontal: 16 }}>

                <HeaderComp
                    isBack={false}
                    text={"Home"}
                />
                <ButtonComp
                    btnText="Go To Explore"
                    btnStyle={{ backgroundColor: 'green' }}
                    textSTyle={{ color: 'orange' }}
                    onClick={() => navigation.navigate("Explore")}
                />

                <DropDown
                    value={selectedItem}
                    data={fruits}
                    onSelect={onSelect}
                />
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16

    },
});

//make this component available to the app
export default Home;
