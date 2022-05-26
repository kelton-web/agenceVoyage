import React, { Component, ReactElement, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonChoise {
    onPress: () => void;
}

const BtnChoise: React.FC<ButtonChoise> = ({ onPress }) => {
  return (
      <View style={styles.containerStyle}>
        <TouchableOpacity onPress={onPress} style={styles.styleBtn}>
            <Text>Portugal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.styleBtn}>
            <Text>Espagne</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.styleBtn}>
            <Text>France</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
    },
    styleBtn: {
        marginLeft: 10,
        backgroundColor: 'lightgray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        opacity: 0.7
    },

})

export default BtnChoise;
