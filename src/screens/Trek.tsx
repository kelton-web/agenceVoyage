import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, Pressable , Platform} from 'react-native';
import DATA from '../data/DataTrek';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../navigation/Navigation";
import CardTrek from "../components/compTrek/CardTrek";

interface StockTrek {
  
}

interface StockTrek {
    title: string,
    desc: string,
    destination: string;
    img: any;
    imgDestination: any;
}
type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Home'>


const Trek: React.FC<StockTrek> = ({title, desc, img, destination, imgDestination}) => {
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
            <View style={styles.containerImg}>
                <ImageBackground source={require('../../assets/trek/montagne.png')} style={styles.smallContainerImg}>
                    <Text style={styles.textStyle}>TREK, RAID, AVENTURE</Text>
                    <View style={styles.containerBtn}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Saisir une destination, une envie de voyage"
                            value={text}
                            onChangeText={(t) => setText(t)}
                        />
                        <Pressable style={({ pressed }) =>[{backgroundColor: pressed ? "gray" : "black"},styles.btnSubmit]} onPressIn={() => onSubmitText(text)} >
                            <Text style={styles.btnSubmitText}>Y ALLER !</Text>
                        </Pressable>
                    </View>
                    <View style={styles.containerStyle}>
                        <TouchableOpacity onPress={() => console.log('heelooo')} style={styles.styleBtn}>
                            <Text>Comores</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('heelooo')} style={styles.styleBtn}>
                            <Text>France</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('heelooo')} style={styles.styleBtn}>
                            <Text>Allemagne</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.containerBanniere}>
                    <View style={styles.containerFiltre}>
                        <View style={{borderRightWidth: 1, paddingRight: 45, borderRightColor: 'gray' }}>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Hôtels</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Vol + Hôtels</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{borderLeftWidth: 1, paddingLeft: 45, borderLeftColor: 'gray'}}>
                            <TouchableOpacity>
                                <Text style={styles.textBanniereStyle}>Vols</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerDestination}>
                <ScrollView >
                    <View style={{height: '100%', width: '100%' }}>
                        {DATA.map((item: StockTrek, key: number) =>
                            <CardTrek key={key} title={item.title} imgDestination={item.imgDestination} img={item.img} desc={item.desc} destination={item.destination} />
                        )}
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
    },
    containerDestination: {
        flex: 2.4,
        width: '100%',
        backgroundColor: 'white',
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
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 20,
        opacity: 0.7
    },
    
})

export default Trek;
