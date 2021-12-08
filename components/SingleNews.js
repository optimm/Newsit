import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{ ...styles.description, backgroundColor: "rgb(14, 14, 14)" }}
      >
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          By - <Text> {item.author ?? "unknown"}</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
          <Text style={{ fontSize: 14, color: "white" }}>
            '{item?.content?.slice(0, 45)}...'
          </Text>
          <Text style={{ fontSize: 16, color: "white" }}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
  footer: {
    height: 65,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgb(25,25,25)",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
});

export default SingleNews;
