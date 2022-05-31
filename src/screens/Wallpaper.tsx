import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import BtnChoise from '../components/compWallpaper/BtnChoise';
import DescriptionWallpaper from '../components/compWallpaper/DescriptionWallpaper';
import InpireBtn from '../components/compWallpaper/InpireBtn';
import InputSearch from '../components/compWallpaper/InputSearch';
import { RouteParams } from '../navigation/Navigation';
 
interface InterWallpaper {
}

const Wallpaper:React.FC<InterWallpaper> = ({}) => {
    const onPressed = () => {
        navigation.navigate('Root')
    }
    const onHandleSearch = () => {
        console.log('onHandleSearch')
    }

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();


    return ( 
        <View style={styles.container}>
           <ImageBackground style={styles.ImageBackground} source={require('../../assets/wallpaper.png')}>
               <View style={styles.containerLogo}>
                    <Image style={styles.imgLogo} source={require('../../assets/logo.png')} />
               </View>
               <View style={styles.containerInput}>
                    <View style={{flex: 1.4, width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontWeight: '600', top: -10}}>UN VOYAGE SUR MESURE EN IMMERSION</Text>
                        <InputSearch />
                    </View>

                    <View style={{flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center', top: 20}}>
                        <BtnChoise onPress={onHandleSearch} />
                    </View>

                    <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                            <View style={{backgroundColor: 'white', height: 2, width: '25%',right: 8}}></View>
                            <Text style={{color: 'white', fontSize: 10}}>ou</Text>
                            <View style={{backgroundColor: 'white', height: 2, width: '25%', left: 8}}></View>
                        </View>
                        <InpireBtn onPress={onPressed} />
                    </View>
               </View>
               <View style={styles.containerDescription}>
                   <View style={styles.smallContainerDescription}>
                    </View>
                            <DescriptionWallpaper /> 
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
    ImageBackground: {
        flex: 1,
        width: '100%',
        backgroundColor: "black",
        
    }, /* *** containerLogo ***  */
    containerLogo: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    imgLogo: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
        
    },
    /* *** containerRecherche ***  */
    containerInput: {
        flex: 2,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
   
    /* *** containerDescription ***  */
    containerDescription: {
        flex: 1.5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    smallContainerDescription: {
        width: "80%",
        backgroundColor: "white",
        flex: 0.9,
        borderRadius: 20,
        opacity: 0.2,
        overflow: 'hidden'
    }
})

export default Wallpaper;
