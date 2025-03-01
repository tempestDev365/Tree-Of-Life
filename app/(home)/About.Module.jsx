import React  from "react";
import { StyleSheet } from "react-native";

export const design = StyleSheet.create({  

    AboutContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    AboutChildContainer: {
        width: '90%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        textAlign: 'center',
    }
})