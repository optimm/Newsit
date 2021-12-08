import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NewsContext } from "../API/Context";

const TopNavigation = (index, setIndex) => {
  const { fetchNews } = useContext(NewsContext);
  const ind = index.index;
  const set = index.setIndex;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "rgb(56, 56, 56)",
      }}
    >
      {ind === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ color: "white", fontSize: 18 }}>NewsIt</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => set(ind === 0 ? 1 : 0)}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={15}
            color="rgb(209, 209, 209)"
          />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      )}
      <Text style={{ ...styles.center, color: "rgb(209, 209, 209)" }}>
        {ind ? "All News" : "Discover"}
      </Text>
      {ind ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="rgb(209, 209, 209)" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => set(ind === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: "rgb(209, 209, 209)" }}>
            All News
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={15}
            color="rgb(209, 209, 209)"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  center: {
    paddingBottom: 5,
    fontSize: 20,
    // fontWeight: "700",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
});
export default TopNavigation;
