import React, { useContext, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const widowHeight = Dimensions.get("window").height;
  const [activeIndex, setactiveIndex] = useState();
  const {
    news: { articles },
  } = useContext(NewsContext);
  // console.log(articles.length);
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles}
          sliderHeight={300}
          itemHeight={widowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setactiveIndex(index)}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});

export default NewsScreen;
