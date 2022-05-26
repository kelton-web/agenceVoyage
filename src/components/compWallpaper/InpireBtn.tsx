import React, { Component, ReactElement, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface InpireType {
    onPress: () => void;
}

const InpireBtn: React.FC<InpireType> = ({ onPress }) => {
  return (
      <View style={styles.containerStyle}>
            <TouchableOpacity onPress={onPress} style={styles.styleBtn}>
                <Text style={styles.styleBtnText}>Inspirez-moi  <View style={{width:3}}/>
                <Image style={styles.styleBtnImage} source={require('../../../assets/idee_ampoule.png')}/>
                </Text>
            </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    styleBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    styleBtnText: {
        color: 'white',
        top: -3,
        fontWeight: '600',
        fontSize: 13,
        width: "100%",
    },
    styleBtnImage: {
        height: 15,
        width: 15,
        
    }



})

export default InpireBtn;
