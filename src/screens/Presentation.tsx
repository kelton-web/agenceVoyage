import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, Pressable , Platform} from 'react-native';
import DATA from '../data/DataTrek';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../navigation/Navigation";
import CardTrek from "../components/compTrek/CardTrek";


interface StockTrek {
  
}

interface StockPresentation {
    title: string,
    desc: string,
    destination: string;
    img: any;
    imgDestination: any;
}
type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Home'>


const Presentation: React.FC<StockPresentation> = ({title, desc, img, destination, imgDestination}) => {
    const [text, setText] = React.useState("");

    const navigation = useNavigation<autheScreenNavigationType>();
    const route = useRoute<RouteProp<RouteParams>>();
    console.log(destination);
  
    const onSubmitText = (text: string) => {
      console.log(text);
      if(text){
        setText("");
        navigation.navigate('Home');
      }
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.containerImg}>
                <ImageBackground source={require('../../assets/trek/montagne.png')} style={styles.smallContainerImg}>
                   
                    <View style={styles.containerStyle}>
                        <View style={styles.styleBtn}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{/* {route.params?.destination} */}Mexique</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.containerBanniere}>
                    <View style={styles.containerFiltre}>
                        <View style={{borderRightWidth: 1, paddingRight: 35, borderRightColor: 'gray' }}>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Presentation</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Galerie</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderLeftWidth: 1, paddingLeft: 45, borderLeftColor: 'gray'}}>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Avis</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerDestination}>
                <ScrollView >
                    <View style={{height: '100%', width: '100%', marginTop: 12}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Résumé</Text>
                        <Text style={{marginVertical: 10}}>Depuis Porto, ville ancienne et authentique, jusqu'à Lisbonne, capitale lumineuse et mystérieuse, c'est une succession de magnifiques paysages, de lieux historiques et de villages typiques que nous vous proposons dans ce circuit.</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Logement</Text>
                        <Text style={{marginVertical: 10}}>Depuis Porto, ville ancienne et authentique, jusqu'à Lisbonne, capitale lumineuse et mystérieuse, c'est une succession de magnifiques paysages, de lieux historiques et de villages typiques que nous vous proposons dans ce circuit.</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Votre programme</Text>
                        <Text style={{marginVertical: 10}}>Depuis Porto, ville ancienne et authentique, jusqu'à Lisbonne, capitale lumineuse et mystérieuse, c'est une succession de magnifiques paysages, de lieux historiques et de villages typiques que nous vous proposons dans ce circuit.</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    containerDestination: {
        flex: 2.4,
        width: '100%',
        paddingHorizontal: 10,
       
    },
    containerImg: {
        width: '100%',
        flex: 1,
        position: 'relative',
    },
    smallContainerImg: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImgStyle: {
        flex: 1,
        width: '100%',
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    containerBanniere: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        
    },
    textBanniereStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    containerFiltre: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },


/* InputSearch */

    containerBtn: {
        paddingVertical: Platform .OS === 'ios' ? 15 : 9,
        width: "90%",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "white",
        marginBottom: 15,
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 12,
        width: "70%",
        left: "4%",
    },
    btnSubmit: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        position: 'absolute',
        right: 0,
        marginHorizontal: 7,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSubmitText: {
        color: '#fff',
        fontSize: 10,
    },


/* 3 button choix */


    containerStyle: {
        flexDirection: "row",
    },
    styleBtn: {
        marginLeft: 10,
        backgroundColor: 'lightgray',
        paddingHorizontal: 40,
        paddingVertical: 7,
        opacity: 0.7
    },
    
})

export default Presentation;
