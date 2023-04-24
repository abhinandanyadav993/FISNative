import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { GoalInput } from "../components/GoalInput";
import { GoalItem } from "../components/GoalItem";

export default function GoalScreen() {
  const [modalVisisble, setModalVisible] = useState<boolean>(false);
  const [goalsList, setGoalsList] = useState<{ text: String; id: string }[]>(
    []
  );

  const startAddGoalhandler = () => {
    setModalVisible(true);
  };
  const endAddGoalhandler = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalhandler();
  };

  const deleteItemHandler = (id: string) => {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalhandler}
        />
        <GoalInput
          goalHandler={addGoalHandler}
          visisble={modalVisisble}
          onCancleHandler={endAddGoalhandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={goalsList}
            renderItem={(
              itemData: ListRenderItemInfo<{ text: String; id: string }>
            ) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteitem={deleteItemHandler}
              />
            )}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </View>
      </>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalContainer: {
    flex: 4,
  },
});
