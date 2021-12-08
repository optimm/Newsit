import React, { useContext, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DicsoverScreen from "../screens/DicsoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "./TopNavigation";

const Ntab = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);
  console.log(index);
  const [routes] = React.useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);
  const renderScene = SceneMap({
    first: DicsoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
    // <Text>Hello</Text>
  );
};
// // const styles = StyleSheet.create({});

export default Ntab;
