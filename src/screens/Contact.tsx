import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../navigation/Navigation";

type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Travel', 'Home, Wallpaper, Circuit, Trek, Root'>


const Contact = () => {
    const navigation = useNavigation<autheScreenNavigationType>();


    const [text, setText] = useState("");

    return (  
        <View style={styles.container}>
            <ImageBackground imageStyle={{opacity: 0.5, }} style={styles.imageBg} source={require('../../assets/contact.png')} >
                <View style={styles.containerTitre}>
                    <Text style={styles.textStyle}>Nous contacter</Text>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                    style={styles.textInput}
                    placeholderTextColor="white"
                    placeholder="Prénom"
                    value={text}
                    onChangeText={(t) => setText(t)}
                    />
                    <TextInput 
                    style={styles.textInput}
                    placeholderTextColor="white"
                    placeholder="Nom"
                    value={text}
                    onChangeText={(t) => setText(t)}
                    />
                    <TextInput 
                    style={styles.textInput}
                    placeholderTextColor="white"
                    placeholder="Adresse mail"
                    value={text}
                    onChangeText={(t) => setText(t)}
                    />
                </View>
                <View style={styles.containerCommentaire}>
                    <Text style={styles.textStyleCommentaire}>Commentaire</Text>
                    <View style={styles.containerBorderCommentaire}>
                        <TextInput 
                        style={styles.textInputCommentaire}
                        placeholder="Commentaire"
                        placeholderTextColor="gray"
                        multiline={true}
                        numberOfLines={4}
                        onSubmitEditing={(value) => setText(value.nativeEvent.text)}
                        />
                        
                    </View>
                </View>
                <View style={styles.containerBtn}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Trek')} style={styles.BtnSend}>
                            <Text style={{color: 'white'}}> Envoyer </Text>
                        </TouchableOpacity>
                    </View>                
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    imageBg: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black'
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: "white",
        width: '60%',
        marginTop: 24,
        color: "white"

    },
    textInputCommentaire: {
        width: '100%',
        overflow: "hidden",
        
    },
    containerBorderCommentaire: {
        borderWidth: 1,
        borderColor: "white",
        width: '70%',
        height: '50%',
        marginTop: 15,
        backgroundColor: "transparent",
        top: 25,
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
    },
    textStyleCommentaire: {
        color: 'white',
        fontSize: 16,
        top: 35
    },
    containerTitre: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerInput: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    containerCommentaire: {
        flex: 1.6,
        width: '100%',
        alignItems: 'center',
        
    },
    containerBtn: {
        flex: 1,
        width: '100%',
    },
    BtnSend: {
        borderWidth: 1,
        borderColor: 'white',
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 20,
        top: 10,
    }
})

export default Contact;