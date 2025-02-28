import React from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { Link } from "expo-router";
import Hero from "../../assets/images/tree-logo.png"

const home = () => {
    return (
        <View style={styles.MainContainer}>
            <ImageBackground
                style={styles.HeroBackground}
                source={Hero}

            >
            <View style={styles.Container}>
                <Text style={styles.ContainerTitle}>Tree of Life: A Mobile Application Game Promoting Walking for Improving Memory and Relaxation</Text>

                <View style={styles.ContainerButton}>
                    <Link href={"/about"}>
                        <Pressable style={styles.ButtonStart}>
                            <Text style={styles.ButtonText}>START GAME</Text>
                        </Pressable>
                    </Link>

                    <Link href={"/about"}>
                        <Pressable style={styles.ButtonHelp}>
                            <Text style={styles.ButtonText}>HELP</Text>
                        </Pressable>
                    </Link>

                    <Link href={"/about"}>
                        <Pressable style={styles.ButtonAbout}>
                            <Text style={styles.ButtonText}>ABOUT</Text>
                        </Pressable>
                    </Link>
                </View>

            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        
       
    },
    HeroBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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

export default home