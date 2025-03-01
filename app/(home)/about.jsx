import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { Link } from "expo-router";
import { design } from "./About.Module";

const about = () => { 
    return (
        <View style={design.AboutContainer}>
            <View style={design.AboutChildContainer}>
            <Text>Tree of Life is an innovative mobile application game designed to encourage walking as a fun and engaging activity to enhance memory and promote relaxation. Combining interactive gameplay with real-world movement, the game motivates players to take steps in real life to nurture and grow their in-game Tree of Life.
            As players walk, they unlock new features, discover hidden challenges, and improve their cognitive well-being. With a calming environment and immersive storytelling, Tree of Life transforms physical activity into a rewarding journey for both the mind and body. Whether you're looking to boost your memory, relieve stress, or simply enjoy an interactive fitness experience, this game makes every step count.
            Start walking, grow your tree, and cultivate a healthier mind today! 🌱🚶‍♂️</Text>
            </View>
        </View>
    )
}

export default about