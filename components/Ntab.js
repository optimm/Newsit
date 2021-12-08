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

  const [routes] = React.useState([
    { key: "first", title: "News" },
    { key: "second", title: "Discover" },
  ]);
  const renderScene = SceneMap({
    first: NewsScreen,
    second: DicsoverScreen,
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
