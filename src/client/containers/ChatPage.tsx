import React from "react";
import { Button, ListItem, Layout, Avatar } from "@ui-kitten/components";
import { StyleSheet, View, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { FlatList } from "react-native-gesture-handler";
import * as types from "../Reducer/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  setUserName,
  setAnonymous,
  setEmail,
  setAddress,
  setKarma,
  setUserRequests,
  setUserTasks,
  setAppTasks,
  setCurrentTask,
} from "../Reducer/actions";

/**
 * @param props - React Native Icons
 * @description - ChatPage component renders scrollable list items
 * @returns Scrollable List Items
 */

const mockData = new Array(8).fill({
  desc: "Thanks for the help! Here's some Karma",
});

const ProfileIcon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  return (
    <Avatar shape="rounded" source={require("../../../assets/alan.jpg")} />
  );
};

export default function ChatPage({ navigation }: any) {
  const renderItemAccessory = () => (
    <Button size="tiny" status="danger">
      Delete
    </Button>
  );

  const RightActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: "red", justifyContent: "center" }}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 300,
            fontWeight: "600",
          }}
        >
          Delete?
        </Text>
      </View>
    );
  };

  const renderItem = ({ item, index }: any) => (
    <Swipeable renderRightActions={RightActions}>
      <ListItem
        style={styles.items}
        description={`${item.desc}`}
        accessoryLeft={ProfileIcon}
        accessoryRight={renderItemAccessory}
        onPress={() => navigation.navigate("Chat Feed")}
      />
    </Swipeable>
  );

  return (
    <Layout
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      level="3"
    >
      <FlatList
        style={styles.container}
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 800,
    width: "100%",
  },
  items: {
    height: 100,
    marginBottom: 20,
  },
  scrollView: {
    backfaceVisibility: "visible",
    marginHorizontal: 20,
  },
  textAction: {
    fontSize: 20,
  },
});
