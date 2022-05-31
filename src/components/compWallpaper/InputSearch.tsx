import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, StyleSheet, TextInput, Pressable, Platform } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Navigation, { RouteParams } from "../../navigation/Navigation";

interface InputPress {
}

type autheScreenNavigationType = NativeStackNavigationProp<RouteParams, 'Root'>

const InputSearch: React.FC<InputPress> = ({}) => {
  const [text, setText] = React.useState("");

  const navigation = useNavigation<autheScreenNavigationType>();

  const onSubmitText = (text: string) => {
    console.log(text);
    if(text){
      setText("");
      navigation.navigate('Root')
    }
  }

  return (
    <View style={styles.container}>
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
  );
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: Platform.OS === 'ios' ? 15 : 9,
        width: "90%",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "white",
        justifyContent: 'center',

    },
    textInput: {
        fontSize: Platform.OS === 'ios' ? 12 : 11,
        width: "70%",
        left: "4%",
    },
    btnSubmit: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        position: 'absolute',
        right: 0,
        marginHorizontal: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSubmitText: {
        color: '#fff',
        fontSize: 10,
    }

})

export default InputSearch;
