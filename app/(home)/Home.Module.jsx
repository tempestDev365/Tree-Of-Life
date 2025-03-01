import React  from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        
       
    },
    HeroBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        resizeMode : "cover",
    },
    Container: {

        width: 350,
        alignItems: "center",
        gap: 20,
    },
    ContainerTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    ContainerButton: {
        gap: 5,
    },
    ButtonStart: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    ButtonText: {
        color: "white",
        textAlign: "center",
    },
    ButtonHelp: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    ButtonAbout: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
})

