import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchInput(props) {
  const { placeholderText } = props;
  const [text, setText] = useState("");

  const handleChangeText = (text) => {
    setText(text);
  };

  const handleSubmitEditing = () => {
    const { onSubmit } = props;

    if (!text) return;
    onSubmit(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={placeholderText}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#567",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: "white",
  },
});
