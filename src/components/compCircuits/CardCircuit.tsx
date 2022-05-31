import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../../navigation/Navigation";

interface StockCardCircuit {
  key: number;
  title: string;
  img: any;
  desc: string;
  destination: string;
  imgDestination: any;
}

type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Home'>


const CardCircuit: React.FC<StockCardCircuit> = ({ title, desc, img, destination, imgDestination}) => {
    const [text, setText] = React.useState("");

    const navigation = useNavigation<autheScreenNavigationType>();
  
    const onSubmitText = (text: string) => {
      console.log(text);
      if(text){
        setText("");
        navigation.navigate('Home')
      }
    }

    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerImg} onPress={() => console.log('heelooo image')}>
                <ImageBackground imageStyle={{ borderRadius: 15,}} style={styles.smallContainerImg} source={imgDestination}>
                    <View style={{position: 'absolute', bottom: 0, left: 0, margin: 14}}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>{destination}</Text>
                    </View>
                    <View style={styles.containerStyle}>
                        <TouchableOpacity onPress={() => console.log('heelooo galerie')} style={styles.styleBtn}>
                            <Text>Galerie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('heelooo details')} style={styles.styleBtn}>
                            <Text>Détails</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImg: {
        width: '96%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 3
    },
    smallContainerImg: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },




    containerStyle: {
        flexDirection: "row",
    },
    styleBtn: {
        marginLeft: 10,
        backgroundColor: 'lightgray',
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 20,
        opacity: 0.7
    },
    
})

export default CardCircuit;
