//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import imagesPath from '../constants/imagesPath';

const DropDown = ({
    data = [],
    value = {},
    onSelect = () => { }
}) => {
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropDownStyle}
                activeOpacity={0.8}
                onPress={() => setShowOption(!showOption)}
            >
                <Text>{!!value ? value?.name : `Choose an options`}</Text>
                <Image style={{
                    transform: [{ rotate: showOption ? '180deg' : '0deg' }]
                }} source={imagesPath.icDropDown} />
            </TouchableOpacity>
            {showOption && (<View style={{
                backgroundColor: 'orange',
                padding: 8,
                borderRadius: 6,
                maxHeight: 150
            }}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {data.map((val, i) => {
                        return (
                            <TouchableOpacity
                                key={String(i)}
                                onPress={() => onSelectedItem(val)}
                                style={{
                                    ...styles.selectedItemStyle,
                                    backgroundColor: value?.id == val.id ? 'pink' : 'white',
                                }}
                            >
                                <Text>{val.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>)}
        </View>
    );
};


const styles = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8,
        borderRadius: 6,
        minHeight: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    selectedItemStyle: {
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal: 6,
        marginBottom: 4
    }
});

export default DropDown;
