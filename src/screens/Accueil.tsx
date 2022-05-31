import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../navigation/Navigation";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,SafeAreaView, Platform} from 'react-native';
import DATA from '../data/DataTravel'


type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Travel', 'Home, Wallpaper, Circuit, Trek'>

interface StockHome {
    title: string,
    desc: string,
    img: any,
    press: string
}

const Home: React.FC<StockHome> = ({title, desc, img, press}) => {

    const navigation = useNavigation<autheScreenNavigationType>();

    const onPressIn = () => {
        console.log(DATA[0].press)
        if(DATA[1].press === "VOYAGE"){
            navigation.navigate('Wallpaper')
        }
    }
    const onPressOut = "hel";
    const Data = DATA;
    return (
        <SafeAreaView  style={styles.container}>
        <ScrollView style={styles.containerScroll}>
{        Data.map((item:StockHome, key: number)  =>
        <View key={key} style={{flex: 1, width: '100%'}}>
            <TouchableOpacity   onPress={() =>  {if(item.press === "VOYAGE"){navigation.navigate('Travel')}else if(item.press === "NOS CIRCUITS") {navigation.navigate('Circuit')} else {navigation.navigate('Trek')}}} >
                <View style={styles.containerHome}>
                    <View style={styles.containerImg}>
                        <Image style={styles.ImgStyle} source={item.img}/>
                        <View style={styles.containerTextStyle}>
                            <View style={{position: "absolute", width: "100%", height: "60%", backgroundColor: 'lightgray', top: 10, left: 2, opacity: 0.6}}></View>
                            <Text style={styles.textStyle}>{item.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.containerBanniere}>
                <Text style={styles.textBanniereStyle}>{item.desc}</Text>
            </View>
        </View>
            )}
        </ScrollView> 
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        
    },
    containerScroll: {
/*         marginBottom: Platform.OS === 'ios' ? "11.3%": "13.5%",
 */
 
},
    btnSubmit: {

    },
    containerHome: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2C2C2C',
    },
    containerImg: {
        width: '100%',
        height: 230,
        position: 'relative',
    },
    ImgStyle: {
        flex: 1,
        width: '100%',
    },
    containerTextStyle: {
        position: 'absolute',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginRight: 10
    },
    containerBanniere: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C2C2C',

    },
    textBanniereStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    }
})

export default Home;




/* item.press === "VOYAGE" ? navigation.navigate('Wallpaper') : navigation.navigate('Travel') */