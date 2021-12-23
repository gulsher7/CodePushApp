import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const HeaderComp = ({
    isBack = true,
    text,
    onBack,
    textStyle,
    rightText,
    leftIcon,
    onRight
}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.headerStyle}>

            {!!isBack ? <TouchableOpacity
                onPress={!!onBack ? onBack : () => navigation.goBack()}
            >
                {!!leftIcon ?
                    <Image
                        source={{ uri: leftIcon }}
                        style={{ width: 35, height: 35 }}
                        resizeMode="contain"
                    />
                    : <Text style={styles.headerText}>GoBack</Text>

                }

            </TouchableOpacity>
                : <Text />
            }
            <Text style={{
                ...styles.headerText,
                ...textStyle
            }}>{text}</Text>

            {!!rightText ?
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onRight}
                >
                    <Text>{rightText}</Text>
                </TouchableOpacity>
                :
                <Text />
            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 42
    },
    headerText: {
        fontSize: 16,
        color: 'black'
    }
});

//make this component available to the app
export default HeaderComp;
