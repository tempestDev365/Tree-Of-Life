import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Hero from "../../assets/images/tree-logo.png";
import { styles } from "./Home.Module";

const Home = () => {
    const router = useRouter();

    return (
        <View style={styles.MainContainer}>
            <ImageBackground
                style={styles.HeroBackground}
                source={Hero}
                resizeMode="cover"
            >
                <View style={styles.Container}>
                    <Text style={styles.ContainerTitle}>
                        Tree of Life: A Mobile Application Game Promoting Walking for Improving Memory and Relaxation
                    </Text>

                    <View style={styles.ContainerButton}>
                        <Pressable style={styles.ButtonStart} onPress={() => router.push("/game")}>
                            <Text style={styles.ButtonText}>START GAME</Text>
                        </Pressable>

                        <Pressable style={styles.ButtonHelp} onPress={() => router.push("/help")}>
                            <Text style={styles.ButtonText}>HELP</Text>
                        </Pressable>

                        <Pressable style={styles.ButtonAbout} onPress={() => router.push("/about")}>
                            <Text style={styles.ButtonText}>ABOUT</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
