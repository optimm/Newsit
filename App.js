import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Ntab from "./components/Ntab";

export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <Ntab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
