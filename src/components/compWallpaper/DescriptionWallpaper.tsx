import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface DescPress {
}

const DescriptionWallpaper: React.FC<DescPress> = ({}) => {
  return (
    <View style={styles.viewdesc}>
      <Text style={styles.descriptionTitreStyle} >Qui sommes-nous ?</Text>
      <Text style={styles.descriptionStyle} >Deux guides francophones sont à l’origine de ce projet : l’un est spécialiste des circuits trekking, des rencontres des ethnies minoritaires, des voyages d’aventure ; l’autre est un grand connaisseur de la culture indochinoise et organisateur de voyages originaux et hors des sentiers battus. Ces deux co-fondateurs ont choisi ANNAM pour nommer leur agence : nom qui révèle leur quête de faire découvrir l’authenticité de l’Indochine aux visiteurs venus d’ailleurs…</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  viewdesc:{
    position: 'absolute',
    width: "80%", 
    paddingHorizontal: 20
  },
  descriptionTitreStyle: {
    marginBottom: 12,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    overflow: 'hidden'
  },
  descriptionStyle: {
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '600',
  }
})



export default DescriptionWallpaper;
