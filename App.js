import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { GoalInput, GoalItem } from './components';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function generateNextId() {
    return Math.max(...courseGoals.map((goal) => goal.id), 0) + 1;
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [
      ...prev,
      { id: generateNextId(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem goal={itemData.item} onDeleteGoal={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
