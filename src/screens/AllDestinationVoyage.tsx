import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, Pressable } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Navigation, { RouteParams } from "../navigation/Navigation";
import DATA from '../data/DataTravel';
import { Ionicons } from '@expo/vector-icons';



type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Travel', 'Home, Wallpaper, Circuit, Trek'>

interface StockAllDestinationVoyage {
    destination: string,
}



const AllDestinationVoyage: React.FC<StockAllDestinationVoyage> = ({destination}) => {
    const navigation = useNavigation<autheScreenNavigationType>();
    const route = useRoute<RouteProp<RouteParams>>();
    return (
        <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Text style={{fontSize: 22, fontWeight: '600'}}>{route.params?.destination}</Text>
                </View>
                <View style={styles.containerOneImg}>
                        <View style={styles.containerMarbella}>
                            <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/marbella.png')} />
                        </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                        <TouchableOpacity style={styles.containeTitle} onPress={() => navigation.navigate('Presentation', {destination: destination})}>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>{route.params?.destination}</Text>
                                <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                            </View>
                            <View style={{marginRight: 10}}>
                            <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                            </View>
                        </TouchableOpacity>
                </View>
                <View style={styles.containerSecondImg}>
                    <View style={styles.smallContainerOne}>
                        <View style={styles.microContainerOne}>
                            <View style={styles.containerMarbella}>
                                <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/barca.png')} />
                            </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                            <View style={styles.containeTitle}>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>Barcelone</Text>
                                    <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                                </View>
                                <View style={{marginRight: 10}}>
                                <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.microContainerTwo}>
                        <View style={styles.containerMarbella}>
                            <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/formentera.png')} />
                        </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                        <View style={styles.containeTitle}>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>Formentera</Text>
                                <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                            </View>
                            <View style={{marginRight: 20}}>
                            <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={styles.smallContainerTwo}>
                        <View style={styles.microContainerTwo}>
                            <View style={styles.containerMarbella}>
                                <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/ibiza.png')} />
                            </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                            <View style={styles.containeTitle}>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>Ibiza</Text>
                                    <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                                </View>
                                <View style={{marginRight: 20}}>
                                <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.microContainerOne}>
                            <View style={styles.containerMarbella}>
                                <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/madrid.png')} />
                            </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                            <View style={styles.containeTitle}>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>Madrid</Text>
                                    <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                                </View>
                                <View style={{marginRight: 20}}>
                                <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerThirdImg}>
                        <View style={styles.containerMarbella}>
                            <Image  style={{ height: "100%", width: "100%"}} source={require('../../assets/destination/palma_de_malorca.png')} />
                        </View>
                        <View style={{height: 35, width: "100%", opacity: 0.3, position: 'absolute', backgroundColor: 'white', bottom: 0}} />
                        <View style={styles.containeTitle}>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: "black", fontSize: 16,fontWeight: "bold" }}>Mallorca</Text>
                                <Text style={{color: "black", fontSize: 12, fontWeight: "500" }}>dès 1440 €</Text>
                            </View>
                            <View style={{marginRight: 20}}>
                                <Ionicons name={"chevron-forward-outline"} size={30} color={"black"}/>
                            </View>
                        </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1
    },
    containerScrollView: {
        flex: 1,
        width: "100%",
    },
    containerImg: {
        flex: 0.3,
        width: "100%",
        backgroundColor: '#EBEBEB',
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    containerOneImg: {
        flex: 1,
        width: "100%",
        marginBottom: 1
    },
    smallContainerOne: {
        flex: 1,
        width: "100%",
    },
    smallContainerTwo: {
        flex: 1,
        width: "100%",
        marginLeft: 3,

    },
    microContainerOne: {
        flex: 1.5,
        width: "100%",
    },
    microContainerTwo: {
        flex: 1,
        width: "100%",
    },
    containerSecondImg: {
        flex: 2,
        width: "100%",
        flexDirection: 'row',
    },
    containerThirdImg: {
        flex: 1,
        width: "100%",
    },
    containerMarbella: {
        flex: 1,
        width: "100%",
        marginBottom: 3,

    },
    containeTitle: {
        position: 'absolute',
        bottom: 3,     
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
    }
})

export default AllDestinationVoyage;