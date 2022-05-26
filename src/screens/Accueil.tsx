import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import DATA from '../data/Data'

interface StockHome {
    title: string,
    desc: string,
    img: any
}

const Home: React.FC<StockHome> = ({title, desc}) => {

    const onPressIn = () => {
        console.log('Press')
    }
    const Data = DATA;
    return (
        <ScrollView style={styles.container}>
{        Data.map((item:StockHome, key: number)  =>
            <TouchableOpacity key={key}  onPressIn={onPressIn} >
                <View style={styles.containerHome}>
                    <View style={styles.containerImg}>
                        <Image style={styles.ImgStyle} source={item.img}/>
                        <View style={styles.containerTextStyle}>
                            <Text style={styles.textStyle}>{item.title}</Text>
                        </View>
                    </View>
                    <View style={styles.containerBanniere}>
                        <Text style={styles.textBanniereStyle}>{item.desc}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            )}
        </ScrollView> 
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
        margin: 10
    },
    containerBanniere: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBanniereStyle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    }
})

export default Home;
