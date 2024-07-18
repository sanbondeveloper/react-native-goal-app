import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, props.goal.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.goal.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
  },
});
