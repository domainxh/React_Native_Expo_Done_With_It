import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style = {styles.container} >
            <View style = {styles.closeIcon}></View>
            <View style = {styles.deleteIcon}></View>
            <Image 
                resizeMode= "contain"
                style = {styles.image}
                source = {require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50, 
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 50,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50, 
        backgroundColor:  colors.secondary,
        position: "absolute",
        top: 50,
        right: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImageScreen;

// function WelcomeScreen(props) {
//     return (
//         <ImageBackground 
//             style = {styles.background}
//             source = {require('../assets/background.jpg')}>
            
//             <View style = {styles.logoContainer}>
//                 <Image style = {styles.logo} source = {require("../assets/logo.jpg")}/>
//                 <Text>Sell What You Don't Need</Text>
//             </View>
        
//             <View style = {styles.loginButton}></View>
//             <View style = {styles.registerButton}></View>
//         </ImageBackground>
//     );
// }

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         justifyContent: "flex-end",
//         alignItems: "center",
//     },
//     loginButton: {
//         width: "100%",
//         height: 70,
//         backgroundColor: "gold"
//     },
//     logo: {
//         width: 100,
//         height: 100,

//     },
//     logoContainer: {
//         position: "absolute",
//         top: 50,
//         alignItems: "center"
//     },
//     registerButton: {
//         width: "100%",
//         height: 70,
//         backgroundColor: "#4ecdc4"
//     }
// })